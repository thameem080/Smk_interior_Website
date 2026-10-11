export const WHATSAPP_NUMBER = "918056294510";
export const PHONE_NUMBER_DISPLAY = "+91 80562 94510";
export const STUDIO_EMAIL = "smartmodularkitchens@gmail.com";
export const STUDIO_ADDRESS = "No.267, GST Road, Guduvanchery, Near Udhayam Stores, Chennai - 603202";
export const STUDIO_HOURS = "10:00 AM – 11:00 PM (All Days)";
export const STUDIO_LEAD = "Mohammed Sheik";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/dJxiTMZCe2oXWH1j9?g_st=aw";
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.1203967201843!2d80.0629589052772!3d12.848033565857737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f652c1bb3f05%3A0xec00f2038bf3786a!2sSmart%20Modular%20Kitchens!5e0!3m2!1sen!2sin!4v1791709837092!5m2!1sen!2sin";
export const WARRANTY_TEXT = "10 Years Warranty for Interior Works";

/**
 * Builds a direct WhatsApp message link.
 * Handles mobile browser deep-linking and desktop web redirection seamlessly.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultText = "Hello SMK Interior, I would like to discuss an interior project with Mohammed Sheik.";
  const encodedText = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

export function openWhatsApp(customMessage?: string): void {
  const link = getWhatsAppLink(customMessage);
  window.open(link, "_blank", "noopener,noreferrer");
}
