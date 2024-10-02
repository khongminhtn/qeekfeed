import { updateBoundaries } from "../functionalities/boundaries";
import { setWidgetPosition } from "../functionalities/positioning";
import { getStates, updateStates } from "../states";
import { States } from "../states.type";

export function Loader(component: any) {
  //  render the component
  let states = getStates()
  var element = component()
  states.widget.innerHTML = ""
  states.widget.appendChild(element)
  
  // reposition widget
  updateBoundaries()
  states.startX = states.widget.offsetLeft;
  states.startY = states.widget.offsetTop;
  let newX = Math.max(0, Math.min(states.startX , window.innerWidth - states.widget.offsetWidth));
  let newY = Math.max(0, Math.min(states.startY , window.innerHeight - states.widget.offsetHeight));
  updateStates(states)
  setWidgetPosition(newX, newY)
}