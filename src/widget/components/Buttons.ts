import { Form } from "./Form";
import { Loader } from "./Loader";

export function FeedbackButton() {
  let button = document.createElement("button")
  button.innerHTML = "Feedback"
  button.id = "qeekfeed-feedback-button"
  button.onclick = () => Loader(Form)
  return button
}

export function SubmitButton() {
  let button = document.createElement("button")
  button.innerHTML = "Thank you!"
  button.id = "qeekfeed-feedback-button-submit"
  return button
}