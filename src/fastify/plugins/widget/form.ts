import { FastifyPluginAsync } from "fastify";

interface FeedbackFormBodyType {
  feedback: string;
}

interface FeedbackFormHeaderType {
  "content-type": string
}

const feedbackPlugin: FastifyPluginAsync = async ( fastify, options) => {
  fastify.post<{
    Body: FeedbackFormBodyType
    Headers: FeedbackFormHeaderType
  }>("/feedback", async (request, reply) => {
    
    const feedbackBody = request.body
    reply.code(201).send({
      message: "Form submited"
    })
  })
}

export default feedbackPlugin