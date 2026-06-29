/**
 * Recorrido — alineado al orden canónico.
 * Emociones y preguntas tomadas de experience-map.md, reordenadas al canon.
 */

/** @typedef {import('./spaces.js').SpaceId} SpaceId */

/** @typedef {Object} JourneyStage
 * @property {number} stage
 * @property {SpaceId} spaceId
 * @property {string} [emotion]
 * @property {string} [question]
 * @property {boolean} [transition]
 */

/** @type {JourneyStage[]} */
export const JOURNEY_STAGES = [
  {
    stage: 1,
    spaceId: 'entrance',
    emotion: 'Curiosity',
    question: 'What is this place?',
  },
  {
    stage: 2,
    spaceId: 'observatory',
    emotion: 'Inspiration',
    question: 'Where is he going?',
  },
  {
    stage: 3,
    spaceId: 'lake',
    emotion: 'Calm',
    question: 'Who is he beneath the work?',
  },
  {
    stage: 4,
    spaceId: 'workshop',
    emotion: 'Respect',
    question: 'What does he create?',
  },
  {
    stage: 5,
    spaceId: 'library',
    emotion: 'Connection',
    question: 'What shaped him?',
  },
  {
    stage: 6,
    spaceId: 'waterfall',
    transition: true,
  },
  {
    stage: 7,
    spaceId: 'heart',
    emotion: 'Understanding',
    question: 'Why does he do all this?',
  },
];

/** @type {Record<string, string>} Principios UX del recorrido */
export const JOURNEY_PRINCIPLES = {
  guidance: 'The user must feel guided.',
  freedom: 'The user must never feel trapped.',
  exploration: 'The experience should reward exploration.',
  accessibility: 'Information must remain accessible.',
  usability: 'Beauty must never reduce usability.',
  dualPurpose: 'The portfolio must work both as a professional portfolio and a narrative experience.',
  goldenRule: 'Emotion first. Information second. Confusion never.',
};

/**
 * Taller y Biblioteca deben visitarse antes de la Cascada (convergencia del canon).
 * @type {SpaceId[]}
 */
export const PREREQUISITES_BEFORE_WATERFALL = ['workshop', 'library'];

/** @deprecated Usar PREREQUISITES_BEFORE_WATERFALL */
export const PREREQUISITES_BEFORE_HEART = PREREQUISITES_BEFORE_WATERFALL;

/**
 * @param {SpaceId} spaceId
 * @returns {JourneyStage | undefined}
 */
export function getJourneyStage(spaceId) {
  return JOURNEY_STAGES.find((stage) => stage.spaceId === spaceId);
}

/**
 * @param {SpaceId} spaceId
 * @returns {JourneyStage | undefined}
 */
export function getNextJourneyStage(spaceId) {
  const index = JOURNEY_STAGES.findIndex((stage) => stage.spaceId === spaceId);
  if (index === -1 || index >= JOURNEY_STAGES.length - 1) return undefined;
  return JOURNEY_STAGES[index + 1];
}

/**
 * @param {SpaceId} spaceId
 * @returns {JourneyStage | undefined}
 */
export function getPreviousJourneyStage(spaceId) {
  const index = JOURNEY_STAGES.findIndex((stage) => stage.spaceId === spaceId);
  if (index <= 0) return undefined;
  return JOURNEY_STAGES[index - 1];
}
