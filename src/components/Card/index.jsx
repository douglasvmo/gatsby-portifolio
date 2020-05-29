import React from "react"

import BeTheHeroImage from "../images/"

import "./style.css"

const Card = ({
  name,
  description,
  sorceLink,
  pageLink,
  backColor,
  imageName,
}) => {
  return (
    <div className="main-card">
      <div className="card">
        <div className="thefront ">
          <div className="card-picture">
            <BeTheHeroImage imageName={imageName} />
          </div>
          <div className="card-text">
            <div className="card-title">{name}</div>
            <p className="card-description">{description}</p>
          </div>
        </div>
        <div className="theback" style={{ backgroundColor: backColor }}>
          <div className="back-text">
            <a
              className="back-button"
              href={pageLink}
              target="_blank"
              rel="noreferrer"
            >
              Page
            </a>
            <a
              className="back-button"
              href={sorceLink}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
