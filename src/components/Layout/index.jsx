/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import "./main.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
