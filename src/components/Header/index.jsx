import React from "react"

import { FaGithub } from "react-icons/fa"
import Image from "../images"
import "./style.css"

function Header() {
  return (
    <header>
      <Navbar />
    </header>
  )
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="bar-left"></div>
      <div className="bar-right">
        <a href="https://github.com/douglasOlv">
          <FaGithub size={26} className="" />
        </a>
      </div>

      <div className=""></div>
    </nav>
  )
}

export default Header
