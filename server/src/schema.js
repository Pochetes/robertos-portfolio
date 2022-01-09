import { gql } from 'apollo-server'

const typeDefs = gql`
    "Fundamental details about getting to know me"
    type User {
        "The user's first name"
        firstName: String!
        "The user's last name"
        lastName: String!
        "The user's email address"
        email: String!
        "The user's profile image"
        image: String!
        "A brief description about the user's life"
        description: String!
    }

    "Here will be my social media links"
    type Contact {
        "The social media platform that the user uses"
        title: String!
        "An image of the social media platform"
        image: String!
        "A link to the user's social media profile"
        link: String!
    }

    "This section holds the technical skills that I possess"
    type Skill {
        "The programming language that the user knows"
        technology: String!
        "An image of the programming language"
        image: String!
    }

    "Here will be the experiences that I've had throughout my journey pursuing Software Engineering"
    type Experience {
        "The name of the user's employer"
        company: String!
        "The user's role in the company"
        position: String!
        "The date that the user began working at the company"
        dateStarted: String!
        "The date that the user stopped working at the company"
        dateEnded: String!
        "An image of the company's logo"
        image: String!
    }

    "This will retrieve my interests in and outside the technology world"
    type Interest {
        "The name of the user's interest"
        topic: String!
        "An image related to the interest"
        image: String!
    }

    "This will return my software related projects that I have worked on"
    type Project {
        "The name of the project"
        title: String!
        "A brief description of what the project is/does"
        description: String!
        "An image related to the project (if doesn't exist)"
        image: String!
        "A link to the Github repository of the project"
        link: String!
    }

    "All of the queries that will be used for the frontend"
    type Query {
        "Query to get basic information of the user"
        user: [User!]!
        "Query to get a list of all the social media links of the user"
        contacts: [Contact!]!
        "Query to get a list of the skills that the user knows"
        skills: [Skill!]!
        "Query to get a list of the user's career experiences"
        experiences: [Experience!]!
        "Query to get a list of the user's interests"
        interests: [Interest!]!
        "Query to get a list of the user's technical projects"
        projects: [Project!]!
    }
`

export default typeDefs
