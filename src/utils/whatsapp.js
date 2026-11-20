import institute from '../data/institute'

/**
 * Generate a WhatsApp chat URL with an optional pre-filled message.
 */
export function getWhatsAppUrl(customMessage) {
  const number = institute.whatsappNumber || '919400884116'
  const message =
    customMessage ||
    `Hello ${institute.name}, I would like to inquire about IT training courses and upcoming batch admissions.`
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export default getWhatsAppUrl

