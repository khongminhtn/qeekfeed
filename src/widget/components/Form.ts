import { assetPaths } from "../config"
import { getStates, updateStates } from "../states"
import { SubmitButton } from "./Buttons"
import { Loader } from "./Loader"

// @ts-ignore
import arrowRight from "../assets/arrow-right.png"

export function Form() {
  // intialize elements
  let form = document.createElement("div")
  form.id = "qeekfeed-feedback-form"

  let textarea = document.createElement("textarea")
  textarea.placeholder = "How can we make this better for you?"

  let img = document.createElement("img")
  img.src = arrowRight
  img.width = 15
  img.height = 15
  img.onclick = () => {
    Loader(SubmitButton)
    
    // remove widget
    setTimeout(() => {
      let states = getStates()
      states.widget.remove()
      updateStates(states)
    }, 1000)
  }

  // add input and button
  form.appendChild(textarea)
  form.appendChild(img)

  return form
}