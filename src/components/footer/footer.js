import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './footer.scss'

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        logo: file(relativePath: { eq: "logo-white.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => (
      <footer className="footer">
        <Img
          fixed={data.logo.childImageSharp.fixed}
          className="footer__logo"
        ></Img>
        <span className="footer__site">SIDRUXELL.COM</span>
        <span className="footer__copyright">
          Copyright @ {new Date().getFullYear() + ' '} Sid Ruxell
        </span>
      </footer>
    )}
  ></StaticQuery>
)
