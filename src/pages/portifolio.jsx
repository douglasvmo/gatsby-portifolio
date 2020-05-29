import React from "react"

import Layout from "../components/Layout"

import inventory from "../components/inventory"
import Card from "../components/Card"

import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="Portfolio Douglas Oliveira" />
      <div className="grid grid-col-1 lg:grid-cols-3 mt-5">
        {inventory.map(item => (
          <Card item={item} />
        ))}
      </div>
    </Layout>
  )
}

export default About
