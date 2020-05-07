import React from 'react'
import Img from 'gatsby-image'

import './article-preview.scss'

export default ({ image, position = 'dx', hasAction = true, actionText = 'Scopri ora' }) => (
  <div className="article__wrapper">
    {position === 'dx' ? (
      <div className={`article ${position}`}>
        <div className="article__body">
          <h5 className="article__body-subtitle">
            Mi chiamo Silvio Scripelliti
          </h5>
          <h3 className="article__body-title">
            <strong>Gli amici mi chiamano Sid Ruxell</strong>
          </h3>
          <Img className={`article__logo-inside ${position}`} fixed={image} />
          <div className="article__body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </div>
          {hasAction ? (
            <button className="article__body-action">{actionText}</button>
          ) : null}
        </div>
        <Img className={`article__logo ${position}`} fixed={image} />
      </div>
    ) : (
      <div className={`article ${position}`}>
        <Img className={`article__logo ${position}`} fixed={image} />
        <div className="article__body">
          <h5 className="article__body-subtitle">
            Mi chiamo Silvio Scripelliti
          </h5>
          <h3 className="article__body-title">
            <strong>Gli amici mi chiamano Sid Ruxell</strong>
          </h3>
          <Img className={`article__logo-inside ${position}`} fixed={image} />
          <div className="article__body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </div>
          {hasAction ? (
            <button className="article__body-action">{actionText}</button>
          ) : null}
        </div>
      </div>
    )}
  </div>
)
