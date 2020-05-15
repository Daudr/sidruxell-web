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

    console.log(articles)
    console.log(firstArticles)
    console.log(lastArticle)

    return (
      <Layout location={this.props.location}>
        <Img
          fluid={this.props.data.sushi.childImageSharp.fluid}
          className="full-width-img"
        />
        <div className="page-title-wrapper">
          <Helmet title={siteTitle} />
          <h4 className="subtitle">Benvenuti nel mio mondo</h4>
          <h2 className="title">
            <strong>La vita non consiste nel trovare te stesso.</strong>
            <strong>La vita consiste nel creare te stesso.</strong>
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
          fluid={this.props.data.drawing.childImageSharp.fluid}
          className="full-width-img"
          style={{ maxHeight: `500px`, marginBottom: `40px` }}
        />
        <div className="page-title-wrapper">
          <Helmet title={siteTitle} />
          <h4 className="subtitle">Benvenuti nel mio mondo</h4>
          <h2 className="title">
            <strong>La vita non consiste nel trovare te stesso.</strong>
            <strong>La vita consiste nel creare te stesso.</strong>
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
    sushi: file(relativePath: { eq: "sushi.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    drawing: file(relativePath: { eq: "drawing.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
