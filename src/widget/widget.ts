import { updateBoundaries } from "./functionalities/boundaries"
import { FeedbackButton } from "./components/Buttons"
import { Loader } from "./components/Loader"
import { addDragFunctionality } from "./functionalities/drag"
import { setInitialPosition } from "./functionalities/positioning"
import { states } from "./states"

function createWidget() {
  // initialize widget
  states.widget.style.position = 'fixed';
  states.widget.style.zIndex = '9999';
  document.body.appendChild(states.widget);

  // boundaries setups
  updateBoundaries()
  window.addEventListener('resize', () => updateBoundaries());
  
  // drag setups
  addDragFunctionality()
  setInitialPosition()
  
  // initial 
  Loader(FeedbackButton)
}

createWidget()