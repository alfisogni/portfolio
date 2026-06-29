/**
 * Espacios de Nocturnys — definidos en worldbuilding.md
 * Sin contenido visual; solo identidad simbólica del recorrido.
 */

/** @typedef {'entrance' | 'workshop' | 'lake' | 'library' | 'observatory' | 'waterfall' | 'heart'} SpaceId */

/** @typedef {Object} Space
 * @property {SpaceId} id
 * @property {string} name
 * @property {string} represents
 * @property {'destination' | 'transition'} type
 */

/** @type {Record<SpaceId, Space>} */
export const SPACES = {
  entrance: {
    id: 'entrance',
    name: 'The Entrance',
    represents: 'identity — the exterior of Nocturnys, the first encounter',
    type: 'destination',
  },
  workshop: {
    id: 'workshop',
    name: 'The Workshop',
    represents: 'creation — architecture, engineering, craftsmanship; projects are born here',
    type: 'destination',
  },
  lake: {
    id: 'lake',
    name: 'The Lake',
    represents: 'introspection — reflection, silence; the emotional center that connects every space',
    type: 'destination',
  },
  library: {
    id: 'library',
    name: 'The Library',
    represents: 'memory — influences, thoughts, lessons learned; books contain ideas rather than information',
    type: 'destination',
  },
  observatory: {
    id: 'observatory',
    name: 'The Observatory',
    represents: 'future vision — dreams, experiments, current missions; stars contain possibilities',
    type: 'destination',
  },
  waterfall: {
    id: 'waterfall',
    name: 'The Waterfall',
    represents: 'transition — accessed from the Lake, not a destination',
    type: 'transition',
  },
  heart: {
    id: 'heart',
    name: 'The Heart',
    represents: 'purpose — truth, meaning; at the deepest point lies Noctum Vitae',
    type: 'destination',
  },
};

export const DESTINATION_IDS = Object.values(SPACES)
  .filter((space) => space.type === 'destination')
  .map((space) => space.id);
