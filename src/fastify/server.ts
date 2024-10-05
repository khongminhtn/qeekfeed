import fastify, { FastifyInstance, FastifyPluginAsync } from "fastify";
import { Type, TypeBoxTypeProvider } from "@fastify/type-provider-typebox"

// instatiate fastify
const server = fastify().withTypeProvider<TypeBoxTypeProvider>()

// // register plugin
// server.register()


// start server
const start = async () => {
  try {
    await server.listen({ port: 8080 })
    console.log('Server listening on http://localhost:8080')
  } catch(e) {
    server.log.error(e);
    process.exit(1)
  }
}

start()