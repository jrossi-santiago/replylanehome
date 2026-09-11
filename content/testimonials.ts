export type Testimonial = {
  handle: string;
  quote: string;
  permission: true;
};

/** Only render when every entry has a real handle, quote, and written permission. */
export const testimonials: Testimonial[] = [];
