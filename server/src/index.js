import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.js'
import { resolvers } from './resolvers.js'
import { dummyUser, dummyContacts } from './dummyData.js'

async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dummyUser,
        dummyContacts,
    })

    const { url, port } = await server.listen({port: process.env.PORT || 4000})
    console.log(`
        🚀 Server is running
        🔉 Listening on port ${port}
        📭 Query at ${url}
    `)
}

startApolloServer(typeDefs, resolvers)
