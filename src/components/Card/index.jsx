import React from "react"
import { FaEye, FaCode } from "react-icons/fa"
import "./style.css"

import Image from "../images"

const Card = ({
  name,
  description,
  sorceLink,
  pageLink,
  backColor,
  imageName,
  techs,
}) => {
  return (
    <div className="main-card">
      <div className="card">
        <div className="thefront ">
          <div className="card-picture">
            <h2 className="card-title" style={{ backgroundColor: backColor }}>
              {name}
            </h2>
            <Image imageName={imageName} />
          </div>
          <div className="card-text">
            <ul className="techs">
              {techs.map((item, index) => (
                <li
                  key={index.toString()}
                  style={{ borderBottomColor: `${backColor}66` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="theback" style={{ backgroundColor: backColor }}>
          <p className="card-description">{description}</p>
          <div className="back-nav">
            {pageLink && (
              <a
                className="back-button"
                href={pageLink}
                target="_blank"
                rel="noreferrer"
              >
                <FaEye size={28} color={backColor} />
              </a>
            )}

            <a
              className="back-button"
              href={sorceLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaCode size={28} color={backColor} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
