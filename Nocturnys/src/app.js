/**
 * Renderiza enlaces de navegación según el espacio actual.
 * Sin estilos — solo estructura del recorrido.
 */

import {
  getNavigationOptions,
  getSpaceContext,
  getJourneyOverview,
  getEntryFlow,
  getNextJourneyStage,
  getRoute,
  JOURNEY_PRINCIPLES,
} from './navigation/index.js';

/** @typedef {import('./navigation/spaces.js').SpaceId} SpaceId */

/**
 * @param {SpaceId} currentSpaceId
 * @param {Set<SpaceId>} [visited]
 */
export function renderNavigation(currentSpaceId, visited = new Set()) {
  const context = getSpaceContext(currentSpaceId);
  const options = getNavigationOptions(currentSpaceId, visited);

  document.title = `Nocturnys — ${context.space.name}`;

  const main = document.querySelector('[data-nocturnys-space]');
  if (main) {
    main.dataset.space = currentSpaceId;
    main.dataset.spaceType = context.space.type;

    const title = main.querySelector('[data-nocturnys-title]');
    if (title) title.textContent = context.space.name;

    const represents = main.querySelector('[data-nocturnys-represents]');
    if (represents) represents.textContent = context.space.represents;

    if (context.journey) {
      const emotion = main.querySelector('[data-nocturnys-emotion]');
      if (emotion) {
        emotion.textContent = context.journey.emotion ?? '';
        emotion.closest('p')?.toggleAttribute('hidden', !context.journey.emotion);
      }

      const question = main.querySelector('[data-nocturnys-question]');
      if (question) {
        question.textContent = context.journey.question ?? '';
        question.closest('p')?.toggleAttribute('hidden', !context.journey.question);
      }

      const stage = main.querySelector('[data-nocturnys-stage]');
      if (stage) {
        stage.textContent = context.journey.transition ? '—' : String(context.journey.stage);
      }
    }
  }

  const nav = document.querySelector('[data-nocturnys-nav]');
  if (nav) {
    nav.replaceChildren();

    const list = document.createElement('ul');
    list.setAttribute('aria-label', 'Spatial navigation');

    for (const option of options) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = option.route;
      link.textContent = option.spaceId;
      link.dataset.kind = option.kind;
      item.appendChild(link);
      list.appendChild(item);
    }

    nav.appendChild(list);
  }

  const journeyContinue = document.querySelector('[data-nocturnys-continue]');
  if (journeyContinue) {
    journeyContinue.replaceChildren();
    const nextStage = getNextJourneyStage(currentSpaceId);
    if (nextStage) {
      const link = document.createElement('a');
      link.href = getRoute(nextStage.spaceId, currentSpaceId);
      link.textContent = `Continue journey → ${nextStage.spaceId}`;
      link.dataset.kind = 'journey-next';
      journeyContinue.appendChild(link);
    }
  }

  const journeyList = document.querySelector('[data-nocturnys-journey]');
  if (journeyList) {
    journeyList.replaceChildren();

    const ol = document.createElement('ol');
    ol.setAttribute('aria-label', 'Journey overview');

    for (const stage of getJourneyOverview(currentSpaceId)) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = stage.route;
      link.textContent = stage.transition
        ? `→ ${stage.space.name}`
        : `${stage.stage}. ${stage.space.name}`;
      if (stage.spaceId === currentSpaceId) {
        link.setAttribute('aria-current', 'step');
      }
      item.appendChild(link);
      ol.appendChild(item);
    }

    journeyList.appendChild(ol);
  }
}

/**
 * @param {SpaceId} spaceId
 */
export function initSpacePage(spaceId) {
  const visited = new Set(
    JSON.parse(sessionStorage.getItem('nocturnys:visited') ?? '[]')
  );
  visited.add(spaceId);
  sessionStorage.setItem('nocturnys:visited', JSON.stringify([...visited]));

  renderNavigation(spaceId, visited);
}

export { getEntryFlow, JOURNEY_PRINCIPLES };
