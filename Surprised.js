if (canvas.tokens.controlled.length === 0) {
  ui.notifications.warn("Select at least 1 token.");
} else {
  for(let target of Array.from(canvas.tokens.controlled)) {
    toggleCondition("Surprised", target);  
  }
}

async function toggleCondition(condition, entity, {warn = true} = {})
{
  if(!condition || !entity) return;

  game.cub.hasCondition(condition, entity, {warn})
    ? await game.cub.removeCondition(condition, entity, {warn})
    : await game.cub.addCondition(condition, entity, {warn});

  return game.cub.hasCondition(condition, entity, {warn});
}