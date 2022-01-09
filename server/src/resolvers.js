const resolvers = {
    Query: {
        user: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getUser()
        },
        contacts: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getContacts()
        },
        skills: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getSkills()
        },
        experiences: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getExperiences()
        },
        interests: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getInterests()
        },
        projects: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getProjects()
        },
    }
}

export default resolvers