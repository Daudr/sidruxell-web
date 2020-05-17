import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/layout'
import ArticlePreview from '../components/article-preview/article-preview'

import './index.scss'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const articles = get(this, 'props.data.articles.nodes')

    const firstArticles = [...articles];
    const lastArticle = firstArticles.pop();

    const pageInfo = get(this, 'props.data.pageInfo')
    const heroImage = pageInfo.heroImage.fluid;
    const contentImage = pageInfo.contentImage.fluid;

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle}>
          <meta name="description" content="Sito web Sid Ruxell" />
        </Helmet>
        <Img
          fluid={heroImage}
          className="full-width-img"
        />
        <div className="page-title-wrapper">
          <h4 className="subtitle">{pageInfo.subtitle}</h4>
          <h2 className="title">
            <strong>{pageInfo.title}</strong>
          </h2>
        </div>
        <div className="articles-wrapper">
          {firstArticles.map((article, i) => (
            <ArticlePreview
              position={i ? 'sx' : 'dx'}
              article={article}
            />
          ))}
        </div>
        <Img
          fluid={contentImage}
          className="full-width-img"
          style={{ maxHeight: `500px`, marginBottom: `40px` }}
        />
        <div className="page-title-wrapper">
          <Helmet title={siteTitle} />
          <h4 className="subtitle">{pageInfo.contentSubtitle}</h4>
          <h2 className="title">
            <strong>{pageInfo.contentTitle}</strong>
          </h2>
        </div>
        <ArticlePreview article={lastArticle} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    articles: allContentfulBlogPost(limit: 3) {
      nodes {
        title
        subtitle
        description {
          childMarkdownRemark {
            html
          }
        }
        slug
        heroImage {
          fixed(width: 340) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
    pageInfo: contentfulWebPage(webPageTitle:{ eq: "Home" }) {
      title
      subtitle
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      contentTitle
      contentSubtitle
      contentImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
