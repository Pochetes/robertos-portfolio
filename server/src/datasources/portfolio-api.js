import { RESTDataSource } from 'apollo-datasource-rest'

class portfolioAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://robertos-api.herokuapp.com/'
    }

    async getUser() {
        const res = await this.get('user')
        return res
    }

    async getContacts() {
        const res = await this.get('contacts')
        return res
    }

    async getSkills() { 
        const res = await this.get('skills')
        return res
    }

    async getExperiences() {
        const res = await this.get('experiences')
        return res
    }

    async getInterests() {
        const res = await this.get('interests')
        return res
    }

    async getProjects() {
        const res = await this.get('projects')
        return res
    }
}

export default portfolioAPI