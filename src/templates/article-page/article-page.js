import React from 'react'
import Layout from '../../components/layout/layout'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import ArticleCard from '../../components/article-card/article-card'

import './article-page.scss'

class ArticlePageTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const heroImage = get(this.props, 'data.pageInfo.heroImage')
    const articles = get(this.props, 'data.articles.nodes')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`Articles | ${siteTitle}`}>
          <meta name="description" content="Articoli scritti da Sid Ruxell" />
        </Helmet>
        <Img
          fluid={heroImage.fluid}
          className="full-width-img"
          style={{ marginBottom: `120px` }}
        />
        <div className="article__page">
          <div className="article__page-wrapper">
            {articles.map((article) => (
              <ArticleCard article={article} />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArticlePageTemplate

export const pageQuery = graphql`
  query ArticlesPageQuery($skip: Int, $limit: Int) {
    site {
      siteMetadata {
        title
      }
    }
    pageInfo: contentfulWebPage(webPageTitle: { eq: "Home" }) {
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    articles: allContentfulBlogPost(limit: $limit, skip: $skip) {
      nodes {
        slug
        title
        publishDate: updatedAt(formatString: "DD MMM YYYY", locale: "it")
        description {
          childMarkdownRemark {
            html
          }
        }
        heroImage {
          fixed(width: 270) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
`
