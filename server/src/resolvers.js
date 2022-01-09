import { dummyContacts, dummyUser } from "./dummyData.js"

const resolvers = {
    Query: {
        users: () => dummyUser,
        contacts: () => dummyContacts
    }
}

export { resolvers }
