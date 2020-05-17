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
    const author = get(this, 'props.data.author')
    const pageInfo = get(this, 'props.data.pageInfo')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`About | ${siteTitle}`}>
          <meta name="description" content="Informazioni su Sid Ruxell" />
        </Helmet>
        <Img
          fluid={pageInfo.heroImage.fluid}
          className="full-width-img"
          style={{ marginBottom: `100px` }}
        />
        <ArticlePreview
          position="sx"
          article={author}
          actionText="Contact me"
          customAction={`mailto:${author.mail}`}
        />

        <h2 className="social__title">Seguimi sui miei social</h2>
        <div className="social__wrapper">
          <SocialHero
            logoStyle={{ bottom: `145px`, maxWidth: `270px` }}
            image={author.facebookImage.fluid}
            logo={this.props.data.facebookLogo.childImageSharp.fluid}
            url={author.facebookLink}
          />
          <SocialHero
            logoStyle={{ bottom: `108px` }}
            image={author.youtubeImage.fluid}
            logo={this.props.data.youtubeLogo.childImageSharp.fluid}
            url={author.youtubeLink}
          />
          <SocialHero
            logoStyle={{ bottom: `99px` }}
            image={author.instagramImage.fluid}
            logo={this.props.data.instagramLogo.childImageSharp.fluid}
            url={author.instagramLink}
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
    author: contentfulAuthor(contentful_id: { eq: "uGY5RwMMhAoEdomn81UYx" }) {
      name
      title
      subtitle
      mail
      description {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fixed(width: 340) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      facebookLink
      facebookImage {
        fluid(maxWidth: 270) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      youtubeLink
      youtubeImage {
        fluid(maxWidth: 270) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      instagramLink
      instagramImage {
        fluid(maxWidth: 270) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    pageInfo: contentfulWebPage(webPageTitle: { eq: "About" }) {
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
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
    youtubeLogo: file(relativePath: { eq: "youtube-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 170) {
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
