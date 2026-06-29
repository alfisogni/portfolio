/**
 * API de navegación — une recorrido (journey), canon espacial y rutas.
 * El visitante nunca queda atrapado: siempre puede volver al hub o retroceder en el recorrido.
 */

import { canTraverse, CENTRAL_HUB, FIRST_DESTINATION, getSpatialConnections } from './canon.js';
import {
  getJourneyStage,
  getNextJourneyStage,
  getPreviousJourneyStage,
  JOURNEY_STAGES,
  PREREQUISITES_BEFORE_WATERFALL,
} from './journey.js';
import { getRoute } from './routes.js';
import { SPACES } from './spaces.js';

/** @typedef {import('./spaces.js').SpaceId} SpaceId */

/**
 * @typedef {Object} NavigationOption
 * @property {SpaceId} spaceId
 * @property {string} route
 * @property {'spatial' | 'journey-next' | 'journey-prev' | 'hub'} kind
 */

/**
 * @param {SpaceId} from
 * @param {SpaceId} to
 * @param {Set<SpaceId>} visited
 * @returns {{ allowed: boolean, reason?: string }}
 */
export function validateNavigation(from, to, visited = new Set()) {
  if (!canTraverse(from, to)) {
    return { allowed: false, reason: 'No spatial connection between these spaces.' };
  }

  if (to === 'waterfall' && from === 'lake') {
    const missing = PREREQUISITES_BEFORE_WATERFALL.filter((id) => !visited.has(id));
    if (missing.length > 0) {
      return {
        allowed: false,
        reason: 'Workshop and Library must be visited before the Waterfall.',
      };
    }
  }

  return { allowed: true };
}

/**
 * Opciones de navegación desde un espacio.
 * Combina conexiones espaciales con el recorrido guiado, sin bloquear la exploración.
 * @param {SpaceId} currentSpaceId
 * @param {Set<SpaceId>} [visited]
 * @returns {NavigationOption[]}
 */
export function getNavigationOptions(currentSpaceId, visited = new Set()) {
  /** @type {NavigationOption[]} */
  const options = [];
  const seen = new Set();

  const add = (spaceId, kind) => {
    if (spaceId === currentSpaceId || seen.has(spaceId)) return;
    const check = validateNavigation(currentSpaceId, spaceId, visited);
    if (!check.allowed) return;
    seen.add(spaceId);
    options.push({ spaceId, route: getRoute(spaceId, currentSpaceId), kind });
  };

  for (const spaceId of getSpatialConnections(currentSpaceId)) {
    add(spaceId, spaceId === CENTRAL_HUB ? 'hub' : 'spatial');
  }

  const next = getNextJourneyStage(currentSpaceId);
  if (next) add(next.spaceId, 'journey-next');

  const prev = getPreviousJourneyStage(currentSpaceId);
  if (prev) add(prev.spaceId, 'journey-prev');

  if (currentSpaceId !== CENTRAL_HUB && canTraverse(currentSpaceId, CENTRAL_HUB)) {
    add(CENTRAL_HUB, 'hub');
  }

  return options;
}

/**
 * Punto de entrada al mundo (entrance) y primer destino canónico (observatory).
 * @returns {{ entry: string to: SpaceId, firstDestination: SpaceId }}
 */
export function getEntryFlow() {
  return {
    entry: 'entrance',
    firstDestination: FIRST_DESTINATION,
  };
}

/**
 * Resumen del recorrido completo para referencia e implementación futura.
 * @param {SpaceId} [fromSpaceId]
 */
export function getJourneyOverview(fromSpaceId) {
  return JOURNEY_STAGES.map((stage) => ({
    ...stage,
    space: SPACES[stage.spaceId],
    route: getRoute(stage.spaceId, fromSpaceId),
  }));
}

/**
 * @param {SpaceId} spaceId
 */
export function getSpaceContext(spaceId) {
  return {
    space: SPACES[spaceId],
    route: getRoute(spaceId, spaceId),
    journey: getJourneyStage(spaceId),
    connections: getSpatialConnections(spaceId).map((id) => ({
      spaceId: id,
      route: getRoute(id, spaceId),
      type: SPACES[id].type,
    })),
  };
}
