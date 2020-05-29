import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageName }) => {
  const { beTheHero, videoMaker, home, logo } = useStaticQuery(graphql`
    query {
      beTheHero: file(relativePath: { eq: "bethehero.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      videoMaker: file(relativePath: { eq: "video-maker.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      home: file(relativePath: { eq: "home.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  switch (imageName) {
    case "logo.png":
      return <Img fixed={logo.childImageSharp.fixed} />
    case "home.png":
      return <Img fluid={home.childImageSharp.fluid} />
    case "video-maker.png":
      return <Img fluid={videoMaker.childImageSharp.fluid} />
    case "bethehero.png":
      return <Img fluid={beTheHero.childImageSharp.fluid} />
    default:
      return null
  }
}

export default Image
