import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageName, alt }) => {
  const {
    beTheHero,
    videoMaker,
    site,
    home,
    logo,
    eye,
    code,
  } = useStaticQuery(graphql`
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
      site: file(relativePath: { eq: "site.png" }) {
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
      logo: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 26) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      eye: file(relativePath: { eq: "eye.png" }) {
        childImageSharp {
          fixed(width: 36) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      code: file(relativePath: { eq: "code.png" }) {
        childImageSharp {
          fixed(width: 36) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  switch (imageName) {
    case "logo.png":
      return <Img fixed={logo.childImageSharp.fixed} alt={alt} />
    case "home.png":
      return <Img fluid={home.childImageSharp.fluid} alt={alt} />
    case "video-maker.png":
      return <Img fluid={videoMaker.childImageSharp.fluid} alt={alt} />
    case "site.png":
      return <Img fluid={site.childImageSharp.fluid} alt={alt} />
    case "bethehero.png":
      return <Img fluid={beTheHero.childImageSharp.fluid} alt={alt} />
    case "eye.png":
      return <Img fixed={eye.childImageSharp.fixed} alt={alt} />
    case "code.png":
      return <Img fixed={code.childImageSharp.fixed} alt={alt} />
    default:
      return null
  }
}

export default Image
