import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/layout'
import ArticlePreview from '../components/article-preview/article-preview'
import SocialHero from '../components/social-hero/social-hero'

import './about.scss'

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`About | ${siteTitle}`} />
        <Img
          fluid={this.props.data.aboutHero.childImageSharp.fluid}
          className="full-width-img"
          style={{ marginBottom: `100px` }}
        />
        <ArticlePreview
          position="sx"
          image={this.props.data.profilePic.childImageSharp.fixed}
          actionText="Contact me"
        />

        <h2 className="social__title">Seguimi sui miei social</h2>
        <div className="social__wrapper">
          <SocialHero
            logoStyle={{ bottom: `145px`, maxWidth: `270px` }}
            image={this.props.data.aboutFacebook.childImageSharp.fluid}
            logo={this.props.data.facebookLogo.childImageSharp.fluid}
            url="https://www.facebook.com/sidruxellart/"
          />
          <SocialHero
            logoStyle={{ bottom: `108px` }}
            image={this.props.data.aboutYouTube.childImageSharp.fluid}
            logo={this.props.data.youtubeLogo.childImageSharp.fluid}
            url="https://www.instagram.com/sidruxell/"
          />
          <SocialHero
            logoStyle={{ bottom: `99px` }}
            image={this.props.data.aboutInstagram.childImageSharp.fluid}
            logo={this.props.data.instagramLogo.childImageSharp.fluid}
            url="https://www.youtube.com/user/sidruxell"
          />
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    aboutHero: file(relativePath: { eq: "about-hero.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    profilePic: file(relativePath: { eq: "profile-pic.png" }) {
      childImageSharp {
        fixed(height: 340) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    aboutFacebook: file(relativePath: { eq: "about-facebook.png" }) {
      childImageSharp {
        fluid(maxWidth: 270) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    facebookLogo: file(relativePath: { eq: "facebook-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 170) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutYouTube: file(relativePath: { eq: "about-youtube.png" }) {
      childImageSharp {
        fluid(maxWidth: 270) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    youtubeLogo: file(relativePath: { eq: "youtube-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 170) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutInstagram: file(relativePath: { eq: "about-instagram.png" }) {
      childImageSharp {
        fluid(maxWidth: 270) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagramLogo: file(relativePath: { eq: "instagram-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 170) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
