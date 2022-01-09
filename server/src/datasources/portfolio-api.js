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

    async getContact(title) {
        const res = await this.get(`contacts/${title}`)
        return res
    }

    async getSkills() { 
        const res = await this.get('skills')
        return res
    }

    async getSkill(technology) {
        const res = await this.get(`skills/${technology}`)
        return res
    }

    async getExperiences() {
        const res = await this.get('experiences')
        return res
    }

    async getExperience(experienceId) {
        const res = await this.get(`experiences/${experienceId}`)
        return res
    }

    async getInterests() {
        const res = await this.get('interests')
        return res
    }

    async getInterest(interestId) {
        const res = await this.get(`interests/${interestId}`)
        return res
    }

    async getProjects() {
        const res = await this.get('projects')
        return res
    }

    async getProject(projectId) {
        const res = await this.get(`projects/${projectId}`)
        return res
    }
}

export default portfolioAPI