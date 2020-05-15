import React from 'react'
import Img from 'gatsby-image'

import './article-preview.scss'
import { Link } from 'gatsby'

export default ({
  article,
  position = 'dx',
  hasAction = true,
  actionText = 'Scopri ora',
  customAction = null,
}) => (
  <div className="article__wrapper">
    {position === 'dx' ? (
      <div className={`article ${position}`}>
        <div className="article__body">
          <h5 className="article__body-subtitle">{article.subtitle}</h5>
          <h3 className="article__body-title">
            <strong>{article.title}</strong>
          </h3>
          <Img
            className={`article__logo-inside ${position}`}
            fixed={article.heroImage.fixed}
          />
          <div
            className="article__body-text"
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          ></div>
          {hasAction && customAction !== null ? (
            <a href={customAction} rel="noopener norefferer" className="article__body-action">
              {actionText}
            </a>
          ) : hasAction ? (
            <Link className="article__body-action" to={`/blog/${article.slug}`}>
              {actionText}
            </Link>
          ) : null}
        </div>
        <Img
          className={`article__logo ${position}`}
          fixed={article.heroImage.fixed}
        />
      </div>
    ) : (
      <div className={`article ${position}`}>
        <Img
          className={`article__logo ${position}`}
          fixed={article.heroImage.fixed}
        />
        <div className="article__body">
          <h5 className="article__body-subtitle">{article.subtitle}</h5>
          <h3 className="article__body-title">
            <strong>{article.title}</strong>
          </h3>
          <Img
            className={`article__logo-inside ${position}`}
            fixed={article.heroImage.fixed}
          />
          <div
            className="article__body-text"
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          ></div>
          {hasAction && customAction !== null ? (
            <a href={customAction} rel="noopener norefferer" className="article__body-action">
              {actionText}
            </a>
          ) : hasAction ? (
            <Link className="article__body-action" to={`/blog/${article.slug}`}>
              {actionText}
            </Link>
          ) : null}
        </div>
      </div>
    )}
  </div>
)
