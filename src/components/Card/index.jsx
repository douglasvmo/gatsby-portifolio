import React from "react"

import Image from "../images/"

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
            <Image imageName={imageName} />
          </div>
          <div className="card-text">
            <div className="card-title">{name}</div>
            <p className="card-description">{description}</p>
          </div>
        </div>
        <div className="theback" style={{ backgroundColor: backColor }}>
          <div className="back-text">
            {pageLink && (
              <a
                className="back-button"
                href={pageLink}
                target="_blank"
                rel="noreferrer"
              >
                <Image imageName="eye.png" alt="view" />
              </a>
            )}

            <a
              className="back-button"
              href={sorceLink}
              target="_blank"
              rel="noreferrer"
            >
              <Image imageName="code.png" alt="code" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
