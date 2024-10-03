import { getStates, updateStates } from "../states";
import { States } from "../states.type";

export function setWidgetPosition(x: number, y: number) {
  let states = getStates()
  x = Math.max(0, Math.min(x, states.maxX));
  y = Math.max(0, Math.min(y, states.maxY));
  states.widget.style.left = x + 'px';
  states.widget.style.top = y + 'px';
  updateStates(states)
}

export function setInitialPosition() {
  let states = getStates()
  const x = 20;
  const y = window.innerHeight - states.widget.offsetHeight - 20;
  setWidgetPosition(x, y)
  updateStates(states)
}