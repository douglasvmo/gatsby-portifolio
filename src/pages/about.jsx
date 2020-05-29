import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About Douglas Oliveira" />
      <div className="grid grid-col-1 lg:grid-cols-2 lg:mt-12">
        <div className="flex-grow self-center p-4">
          <div>
            <h1 className="text-5xl pb-4">about me</h1>
            <p className="font-mono pb-2 text-gray-700">
              i'm a developer basead in Brazil
            </p>
            <p className="text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              tempora non recusandae quidem veritatis fuga aut dolorem omnis
              minima quis excepturi, molestias mollitia tenetur minus quam
              corporis provident suscipit. Quam.
            </p>
          </div>
        </div>

        <div className="flex-grow"></div>
      </div>
    </Layout>
  )
}
export default About
