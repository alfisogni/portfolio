/**
 * Rutas URL del recorrido — relativas entre páginas en pages/.
 */

/** @typedef {import('./spaces.js').SpaceId} SpaceId */

/** @type {Record<SpaceId, string>} */
export const ROUTE_SEGMENTS = {
  entrance: 'entrance',
  observatory: 'observatory',
  workshop: 'workshop',
  lake: 'lake',
  library: 'library',
  waterfall: 'waterfall',
  heart: 'heart',
};

/**
 * @param {SpaceId} targetSpaceId
 * @param {SpaceId} [fromSpaceId]
 * @returns {string}
 */
export function getRoute(targetSpaceId, fromSpaceId) {
  if (fromSpaceId && targetSpaceId === fromSpaceId) {
    return './';
  }
  return `../${ROUTE_SEGMENTS[targetSpaceId]}/`;
}

/**
 * @param {string} pathname
 * @returns {SpaceId | undefined}
 */
export function getSpaceFromPath(pathname) {
  const segment = pathname.replace(/\/+$/, '').split('/').pop();
  const match = Object.entries(ROUTE_SEGMENTS).find(([, value]) => value === segment);
  return match ? /** @type {SpaceId} */ (match[0]) : undefined;
}
