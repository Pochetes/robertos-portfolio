const resolvers = {
    Query: {
        user: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getUser()
        },
        contacts: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getContacts()
        },
        contact: (_, { title }, { dataSources}) => {
            return dataSources.portfolioAPI.getContact(title)
        },
        skills: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getSkills()
        },
        skill: (_, { technology }, { dataSources }) => {
            return dataSources.portfolioAPI.getSkill(technology)
        },
        experiences: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getExperiences()
        },
        experience: (_, { id }, { dataSources }) => {
            return dataSources.portfolioAPI.getExperience(id)
        },
        interests: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getInterests()
        },
        interest: (_, { id }, { dataSources }) => {
            return dataSources.portfolioAPI.getInterest(id)
        },
        projects: (_, __, { dataSources }) => {
            return dataSources.portfolioAPI.getProjects()
        },
        project: (_, { id }, { dataSources }) => {
            return dataSources.portfolioAPI.getProject(id)
        }
    }
}

export default resolvers