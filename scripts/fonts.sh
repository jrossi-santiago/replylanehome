#!/usr/bin/env bash
# Subset replylane marketing fonts to Latin + mark punctuation, as WOFF2.
# Requires: pyftsubset (fonttools), brotli
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${FONTS_SRC:-/tmp/fonts-src}"
OUT="$ROOT/public/fonts"
mkdir -p "$OUT"

UNICODES="U+0000-00FF,U+2013-2014,U+2018-201D,U+2022,U+2026,U+00B7,U+2190-2193,U+23CE"

subset() {
  local input="$1"
  local output="$2"
  shift 2
  pyftsubset "$input" \
    --output-file="$output" \
    --flavor=woff2 \
    --layout-features='*' \
    --unicodes="$UNICODES" \
    "$@"
}

MANROPE="${SRC}/Manrope-Variable.ttf"
INTER="${SRC}/InterVariable.ttf"
PLEX_REG="${SRC}/plex-out/TrueType/IBM-Plex-Mono/IBMPlexMono-Regular.ttf"
PLEX_MED="${SRC}/plex-out/TrueType/IBM-Plex-Mono/IBMPlexMono-Medium.ttf"

[[ -f "$MANROPE" ]] || { echo "Missing $MANROPE"; exit 1; }
[[ -f "$INTER" ]] || { echo "Missing $INTER"; exit 1; }
[[ -f "$PLEX_REG" ]] || { echo "Missing $PLEX_REG"; exit 1; }
[[ -f "$PLEX_MED" ]] || { echo "Missing $PLEX_MED"; exit 1; }

# Manrope variable, weights 500–800
subset "$MANROPE" "$OUT/manrope-variable.woff2"

# Inter variable, weights 400–700 (mark needs ⏎ in Inter)
subset "$INTER" "$OUT/inter-variable.woff2"

# IBM Plex Mono static 400 and 500
subset "$PLEX_REG" "$OUT/ibm-plex-mono-400.woff2"
subset "$PLEX_MED" "$OUT/ibm-plex-mono-500.woff2"

echo "Wrote subsets to $OUT"
ls -la "$OUT"
