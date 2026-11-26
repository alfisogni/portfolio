/**
 * Defensas gratuitas contra el spam de los formularios (el plan gratis de EmailJS no permite
 * restringir dominios). Son tres capas simples, ninguna molesta a una persona real:
 *  1. Campo trampa: un input oculto que una persona nunca ve y un bot suele completar.
 *  2. Tiempo mínimo: nadie completa un formulario en un instante.
 *  3. Pausa entre envíos: un mensaje por minuto por navegador (compartida entre formularios).
 * Si salta la 1 o la 2 no se envía nada, pero se simula el éxito para no darle pistas al bot.
 * Esto frena bots simples; no reemplaza a un captcha ni a una función propia en el servidor.
 */

const KEY = "lastMessageSentAt"

export const COOLDOWN_MS = 60_000

/** Milisegundos que faltan para poder volver a enviar (0 si ya se puede). */
export function cooldownLeft(): number {
  try {
    const last = Number(localStorage.getItem(KEY))
    if (!last) return 0
    return Math.max(0, COOLDOWN_MS - (Date.now() - last))
  } catch {
    return 0
  }
}

export function markSent(): void {
  try {
    localStorage.setItem(KEY, String(Date.now()))
  } catch {
    /* modo privado: sin pausa, pero el envío funciona */
  }
}

/** True si el envío parece de un bot: trampa completa o formulario enviado demasiado rápido. */
export function looksLikeBot(trap: string, openedAt: number, minMs: number): boolean {
  return trap.trim() !== "" || Date.now() - openedAt < minMs
}
