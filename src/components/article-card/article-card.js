import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import './article-card.scss'

export default ({ article }) => (
  <Link className="article__card" to={`blog/${article.slug}`}>
    <Img fixed={article.heroImage.fixed} className="article__card-hero" />
    <span className="article__card-hero-category">{article.category.category}</span>
    <div className="article__card-body">
      <span className="article__card-date">{article.publishDate}</span>
      <h4 className="article__card-title">
        <strong>{article.title}</strong>
      </h4>
      <div
        className="article__card-description"
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  </Link>
)
