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
          <div className="title">
            <Img className="logo" fixed={data.logo.childImageSharp.fixed}></Img>
            <span className="title">
              <strong>Sid</strong> <span>Ruxell Art</span>
            </span>
          </div>

          <nav role="navigation">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <strong>Home</strong>
            </Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
              <strong>Gallery</strong>
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              <strong>About</strong>
            </Link>
          </nav>

          <div className="social">
            <Img
              className="social-logo"
              fixed={data.facebook.childImageSharp.fixed}
            ></Img>
            <Img
              className="social-logo"
              fixed={data.instagram.childImageSharp.fixed}
            ></Img>
            <Img
              className="social-logo"
              fixed={data.youtube.childImageSharp.fixed}
            ></Img>
            <Img
              className="social-logo"
              fixed={data.pinterest.childImageSharp.fixed}
            ></Img>
            <Img
              className="social-logo"
              fixed={data.behance.childImageSharp.fixed}
            ></Img>
          </div>
        </div>
      </header>
    )}
  ></StaticQuery>
)
