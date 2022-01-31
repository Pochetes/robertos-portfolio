import * as React from "react"
// @ts-ignore
import Layout from '../Layout/Layout'
import Contacts from "./Contacts"

const Hero = () => (
    <Layout>
        <section>
            <div>
                <div>
                    <h1>Some Text for Intro</h1>
                </div>
                <Contacts />
                <div>
                    <img src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="/>
                </div>
            </div>
        </section>
    </Layout>
)

export default Hero