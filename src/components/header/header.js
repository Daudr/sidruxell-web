import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './header.scss'

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        logo: file(relativePath: { eq: "logo-black.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        facebook: file(relativePath: { eq: "facebook.png" }) {
          childImageSharp {
            fixed(height: 18) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        instagram: file(relativePath: { eq: "instagram.png" }) {
          childImageSharp {
            fixed(height: 18) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        youtube: file(relativePath: { eq: "youtube.png" }) {
          childImageSharp {
            fixed(width: 18) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        pinterest: file(relativePath: { eq: "pinterest.png" }) {
          childImageSharp {
            fixed(height: 18) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        behance: file(relativePath: { eq: "behance.png" }) {
          childImageSharp {
            fixed(width: 18) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => (
      <header>
        <div className="header-wrapper">
          <div className="header__title">
            <Img className="logo" fixed={data.logo.childImageSharp.fixed}></Img>
            <span className="header__title">
              <strong>Sid</strong> <span>Ruxell Art</span>
            </span>
          </div>

          <nav role="navigation">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <strong>Home</strong>
            </Link>
            <Link
              to="/gallery"
              className={location.pathname === '/gallery' ? 'active' : ''}
            >
              <strong>Gallery</strong>
            </Link>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <strong>About</strong>
            </Link>
          </nav>

          <div className="social">
            <a href="https://www.facebook.com/sidruxellart/" target="_blank" rel="noopener noreferrer" className="social-logo">
              <Img fixed={data.facebook.childImageSharp.fixed}></Img>
            </a>
            <a href="https://www.instagram.com/sidruxell/" target="_blank" rel="noopener noreferrer" className="social-logo">
              <Img fixed={data.instagram.childImageSharp.fixed}></Img>
            </a>
            <a href="https://www.youtube.com/user/sidruxell" target="_blank" rel="noopener noreferrer" className="social-logo">
              <Img fixed={data.youtube.childImageSharp.fixed}></Img>
            </a>
            <a href="https://www.pinterest.it/livingpixelsart/" target="_blank" rel="noopener noreferrer" className="social-logo">
              <Img fixed={data.pinterest.childImageSharp.fixed}></Img>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="social-logo">
              <Img fixed={data.behance.childImageSharp.fixed}></Img>
            </a>
          </div>
        </div>
      </header>
    )}
  ></StaticQuery>
)
