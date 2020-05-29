import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"

const Contact = () => {
  function navigateTo() {
    navigate("index")
  }

  return (
    <Layout>
      <div className="bg-blue-500">
        <p>Contact</p>
        <button onClick={navigateTo}>hello</button>
      </div>
    </Layout>
  )
}
export default Contact
