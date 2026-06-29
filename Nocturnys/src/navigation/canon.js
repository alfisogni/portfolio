/**
 * Topología espacial — orden canónico de Nocturnys
 *
 * Observatorio → Lago → Taller / Biblioteca → Cascada → Corazón
 */

/** @typedef {import('./spaces.js').SpaceId} SpaceId */

/** Primer destino al entrar en Nocturnys */
export const FIRST_DESTINATION = /** @type {const} */ ('observatory');

/** Hub central — bifurcación hacia Taller y Biblioteca */
export const CENTRAL_HUB = /** @type {const} */ ('lake');

/** Transición hacia el espacio más profundo */
export const HEART_TRANSITION = /** @type {const} */ ('waterfall');

/** Orden canónico lineal (la bifurcación Taller/Biblioteca admite cualquier orden) */
export const CANONICAL_ORDER = /** @type {const} */ ([
  'observatory',
  'lake',
  'workshop',
  'library',
  'waterfall',
  'heart',
]);

/**
 * Grafo de conexiones espaciales.
 * @type {Record<SpaceId, SpaceId[]>}
 */
export const SPATIAL_CONNECTIONS = {
  entrance: ['observatory'],
  observatory: ['lake', 'entrance'],
  lake: ['observatory', 'workshop', 'library', 'waterfall'],
  workshop: ['lake'],
  library: ['lake'],
  waterfall: ['lake', 'heart'],
  heart: ['waterfall'],
};

/**
 * @param {SpaceId} from
 * @param {SpaceId} to
 * @returns {boolean}
 */
export function canTraverse(from, to) {
  return SPATIAL_CONNECTIONS[from]?.includes(to) ?? false;
}

/**
 * @param {SpaceId} spaceId
 * @returns {SpaceId[]}
 */
export function getSpatialConnections(spaceId) {
  return SPATIAL_CONNECTIONS[spaceId] ?? [];
}

/**
 * Ramas del Lago (Taller y Biblioteca).
 * @returns {SpaceId[]}
 */
export function getHubConnections() {
  return ['workshop', 'library'];
}
