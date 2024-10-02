import { States } from "./states.type"


export let states: States = {
  widget: document.createElement('div'),
  isDragging: false,
  startX: 0,
  startY: 0,
  maxY: 0,
  maxX: 0
}

export let updateStates = (newStates: States) => {
  states = {...newStates}
}

export let getStates = () => {
  return states
}