import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

export default ({ image, logo, logoStyle, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="social__hero">
    <BackgroundImage
      fluid={[`linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(14, 98, 136, 1) 100%)`, image]}
      className="social__hero-img"
    />
    <Img style={logoStyle} fluid={logo} className="social__hero-logo" />
  </a>
)
