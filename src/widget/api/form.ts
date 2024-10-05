import { api } from "../config"

export let submitFeedback = async (data: string) => {
  let response = await fetch(
    api.baseURL + "/feedback",
    {
      method: "POST",
      body: JSON.stringify({
        feedback: data
      }),
      headers: {
        "Content-Type": "application/json charset=utf-8"
      }
    }
  )
}