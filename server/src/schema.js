import { gql } from 'apollo-server'

const typeDefs = gql`
    # Fundamental details about getting to know me 
    type User {
        firstName: String!
        lastName: String!
        email: String!
        image: String!
        description: String!
    }

    # Here will be my social media links
    type Contact {
        title: String!
        image: String!
        link: String!
    }

    # This section holds the technical skills that I possess
    type Skill {
        technology: String!
        image: String!
    }

    # Here will be the experiences that I've had throughout my journey pursuing Software Engineering
    type Experience {
        company: String!
        position: String!
        dateStarted: String!
        dateEnded: String!
        image: String!
    }

    # This will retrieve my interests in and outside the technology world
    type Interest {
        topic: String!
        image: String!
    }

    # This will return my software related projects that I have worked on
    type Project {
        title: String!
        description: String!
        image: String!
        link: String!
    }

    type Query {
        user: [User!]!
        contacts: [Contact!]!
        skills: [Skill!]!
        experiences: [Experience!]!
        interests: [Interest!]!
        projects: [Project!]!
    }
`

export default typeDefs
