import { getStates, updateStates as updateStates } from "../states";
import { States } from "../states.type";

export function updateBoundaries() {
  let states = getStates()
  states.maxX = window.innerWidth - states.widget.offsetWidth;
  states.maxY = window.innerHeight - states.widget.offsetHeight;
  updateStates(states)
}