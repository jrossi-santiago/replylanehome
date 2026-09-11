/**
 * Build-time halftone lane assets for replylane marketing.
 * Motif: a road receding to a horizon; centre and edge lines left as bare paper.
 *
 * Usage: npx tsx scripts/halftone.ts
 */
import { createCanvas } from "@napi-rs/canvas";
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const OUT = join(process.cwd(), "public", "halftone");
const PAPER = { r: 0xec, g: 0xe8, b: 0xda };
const INK = { r: 0x15, g: 0x0f, b: 0x0a };

type RGB = { r: number; g: number; b: number };

function clamp(n: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, n));
}

/** Tone field 0..1 (1 = ink) for the lane motif. Bare paper on painted lines. */
function laneTone(x: number, y: number, w: number, h: number, options: { skyClear: boolean }): number {
  const nx = x / w;
  const ny = y / h;

  // Horizon around 28% from top for hero (skyClear leaves above horizon empty)
  const horizon = options.skyClear ? 0.28 : 0.22;

  if (options.skyClear && ny < horizon) {
    return 0; // clear paper above horizon
  }

  // Ground darkens slightly toward bottom and sides
  let tone = 0.08 + ny * 0.35;

  // Vanishing point
  const vx = 0.5;
  const vy = horizon;

  // Road trapezoid
  const progress = clamp((ny - horizon) / (1 - horizon));
  const halfWidth = 0.04 + progress * 0.38;
  const dx = Math.abs(nx - vx);
  const onRoad = dx < halfWidth;

  if (ny >= horizon) {
    if (onRoad) {
      tone = 0.18 + progress * 0.25;
      // Edge lines (bare paper)
      const edgeBand = 0.012 + progress * 0.01;
      if (Math.abs(dx - halfWidth) < edgeBand) tone = 0;
      // Centre dashed line (bare paper dashes)
      const centreBand = 0.008 + progress * 0.006;
      if (dx < centreBand) {
        const dash = Math.floor((ny - horizon) * 40) % 2 === 0;
        if (dash) tone = 0;
      }
    } else {
      // Shoulder / verge
      tone = 0.12 + progress * 0.4 + dx * 0.15;
      // Soft noise ridges
      const ridge = Math.sin(nx * 40 + ny * 10) * 0.03;
      tone += ridge;
    }
  } else {
    // Soft sky tone for non-skyClear variants (og / 404 lower atmosphere)
    tone = 0.02 + (horizon - ny) * 0.05;
  }

  return clamp(tone);
}

function renderHalftone(opts: {
  width: number;
  height: number;
  cell: number;
  skyClear: boolean;
  invert?: boolean;
  label?: string;
  mark?: boolean;
}) {
  const { width, height, cell, skyClear, invert = false, label, mark } = opts;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  const bg = invert ? INK : PAPER;
  const fg = invert ? PAPER : INK;

  ctx.fillStyle = `rgb(${bg.r},${bg.g},${bg.b})`;
  ctx.fillRect(0, 0, width, height);

  // 45° grid: step along rotated axes
  const step = cell;
  const cos = Math.SQRT1_2;
  const sin = Math.SQRT1_2;

  for (let gy = -height; gy < height * 2; gy += step) {
    for (let gx = -width; gx < width * 2; gx += step) {
      const x = gx * cos - gy * sin + width / 2;
      const y = gx * sin + gy * cos;
      if (x < -step || y < -step || x > width + step || y > height + step) continue;

      const tone = laneTone(x, y, width, height, { skyClear });
      if (tone < 0.02) continue;
      const radius = (step * 0.48) * Math.sqrt(tone);
      if (radius < 0.35) continue;

      ctx.beginPath();
      ctx.fillStyle = `rgb(${fg.r},${fg.g},${fg.b})`;
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (mark || label) {
    // Clear a paper band for type (og)
    if (!invert) {
      ctx.fillStyle = `rgb(${PAPER.r},${PAPER.g},${PAPER.b})`;
      ctx.fillRect(0, 0, width, Math.floor(height * 0.42));
      // re-draw soft horizon only below
    }
    ctx.fillStyle = `rgb(${INK.r},${INK.g},${INK.b})`;
    if (mark) {
      ctx.font = "700 42px Inter, system-ui, sans-serif";
      ctx.fillText("⏎", 48, 72);
    }
    if (label) {
      ctx.font = "600 36px Manrope, system-ui, sans-serif";
      ctx.fillText(label, 48, 130);
    }
  }

  return canvas.toBuffer("image/png");
}

async function writePng(name: string, buf: Buffer) {
  const compressed = await sharp(buf)
    .png({ compressionLevel: 9, palette: true, colors: 8 })
    .toBuffer();
  writeFileSync(join(OUT, name), compressed);
  console.log("wrote", name, compressed.length);
}

async function main() {
  mkdirSync(OUT, { recursive: true });

  // hero-lane 2400×900 (@2x of 1200×450)
  await writePng(
    "hero-lane.png",
    renderHalftone({ width: 2400, height: 900, cell: 10, skyClear: true }),
  );
  await writePng(
    "hero-lane-1x.png",
    renderHalftone({ width: 1200, height: 450, cell: 8, skyClear: true }),
  );

  // invert for final CTA on ink
  await writePng(
    "hero-lane-invert.png",
    renderHalftone({ width: 2400, height: 900, cell: 10, skyClear: true, invert: true }),
  );

  // split-lane 1200×1200
  await writePng(
    "split-lane.png",
    renderHalftone({ width: 1200, height: 1200, cell: 10, skyClear: false }),
  );
  await writePng(
    "split-lane-2x.png",
    renderHalftone({ width: 2400, height: 2400, cell: 10, skyClear: false }),
  );

  // og 1200×630
  await writePng(
    "og.png",
    renderHalftone({
      width: 1200,
      height: 630,
      cell: 9,
      skyClear: true,
      mark: true,
      label: "The feed is a terrible CRM.",
    }),
  );

  // 404-lane 2400×1200
  await writePng(
    "404-lane.png",
    renderHalftone({ width: 2400, height: 1200, cell: 10, skyClear: true }),
  );

  // Copy og into app/opengraph-image.png for Next metadata
  const ogSrc = join(OUT, "og.png");
  const ogDest = join(process.cwd(), "app", "opengraph-image.png");
  if (existsSync(ogSrc)) {
    copyFileSync(ogSrc, ogDest);
    console.log("copied opengraph-image.png");
  }

  // Apple touch from simple canvas
  const icon = createCanvas(180, 180);
  const ictx = icon.getContext("2d");
  ictx.fillStyle = `rgb(${PAPER.r},${PAPER.g},${PAPER.b})`;
  ictx.fillRect(0, 0, 180, 180);
  ictx.fillStyle = `rgb(${INK.r},${INK.g},${INK.b})`;
  ictx.font = "700 110px Inter, system-ui, sans-serif";
  ictx.textAlign = "center";
  ictx.textBaseline = "middle";
  ictx.fillText("⏎", 90, 98);
  const apple = await sharp(icon.toBuffer("image/png"))
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(process.cwd(), "public", "apple-touch-icon.png"), apple);
  console.log("wrote apple-touch-icon.png");
}

main();
