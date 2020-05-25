import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './mobile-header.scss'

export default ({ location }) => {
  const handleClick = () => {
    const body = document.getElementsByTagName('body')[0]

    if (body.classList.contains('mobile-header__open')) {
      body.classList.remove('mobile-header__open')
    } else {
      body.classList.add('mobile-header__open')
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query MobileHeaderQuery {
          facebook: file(relativePath: { eq: "facebook-white.png" }) {
            childImageSharp {
              fixed(height: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          instagram: file(relativePath: { eq: "instagram-white.png" }) {
            childImageSharp {
              fixed(height: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          youtube: file(relativePath: { eq: "youtube-white.png" }) {
            childImageSharp {
              fixed(width: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          pinterest: file(relativePath: { eq: "pinterest-white.png" }) {
            childImageSharp {
              fixed(height: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          behance: file(relativePath: { eq: "behance-white.png" }) {
            childImageSharp {
              fixed(width: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="mobile-header">
          <nav role="navigation">
            <Link
              to="/"
              onClick={handleClick}
              className={location.pathname === '/' ? 'active' : ''}
            >
              <strong>Home</strong>
            </Link>
            <Link
              to="/articles"
              onClick={handleClick}
              className={location.pathname.match(/articles/) ? 'active' : ''}
            >
              <strong>Articles</strong>
            </Link>
            <Link
              to="/gallery"
              onClick={handleClick}
              className={location.pathname === '/gallery' ? 'active' : ''}
            >
              <strong>Gallery</strong>
            </Link>
            <Link
              to="/about"
              onClick={handleClick}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <strong>About</strong>
            </Link>
          </nav>

          <div className="social">
            <a
              href="https://www.facebook.com/sidruxellart/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo"
            >
              <Img fixed={data.facebook.childImageSharp.fixed}></Img>
            </a>
            <a
              href="https://www.instagram.com/sidruxell/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo"
            >
              <Img fixed={data.instagram.childImageSharp.fixed}></Img>
            </a>
            <a
              href="https://www.youtube.com/user/sidruxell"
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo"
            >
              <Img fixed={data.youtube.childImageSharp.fixed}></Img>
            </a>
            <a
              href="https://www.pinterest.it/livingpixelsart/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo"
            >
              <Img fixed={data.pinterest.childImageSharp.fixed}></Img>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo"
            >
              <Img fixed={data.behance.childImageSharp.fixed}></Img>
            </a>
          </div>
        </div>
      )}
    ></StaticQuery>
  )
}
