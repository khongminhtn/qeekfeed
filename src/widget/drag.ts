import { updateBoundaries } from "./boundaries";
import { setWidgetPosition } from "./positioning";
import { getStates, updateStates } from "./states";
import { States } from "./states.type";

export function addDragFunctionality() {
  let states = getStates()
  states.widget.addEventListener("mousedown", dragStart);
  document.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragEnd);

  function dragStart(e: MouseEvent) {
    // Initiate dragging and calculate the offset from the mouse to the widget's top-left corner
    states = getStates()
    states.isDragging = true;
    states.startX = e.clientX - states.widget.offsetLeft;
    states.startY = e.clientY - states.widget.offsetTop;
    updateStates(states)
  }

  function dragging(e: MouseEvent) {
    states = getStates()
    if (states.isDragging) {
      e.preventDefault();
      
      // Update boundaries to account for any size changes
      updateBoundaries()

      // Calculate new position based on mouse movement
      let newX = e.clientX - states.startX;
      let newY = e.clientY - states.startY;

      // Constrain new position within boundaries
      // This ensures the widget stays within the viewport, even when resized
      newX = Math.max(0, Math.min(newX, window.innerWidth - states.widget.offsetWidth));
      newY = Math.max(0, Math.min(newY, window.innerHeight - states.widget.offsetHeight));

      setWidgetPosition(newX, newY);
    }
    updateStates(states)
  }

  function dragEnd() {
    // Stop dragging operation
    states = getStates()
    states.isDragging = false;
    updateStates(states)
  }

  
}

