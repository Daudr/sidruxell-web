import React from 'react'
import Header from '../header/header'
import MobileHeader from '../mobile-header/mobile-header'
import Footer from '../footer/footer'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'

import './base.scss'
import { graphql, StaticQuery, Link } from 'gatsby'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    console.log(this.props)

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            categories: allContentfulBlogPostCategory(
              filter: { blog_post: { elemMatch: { id: { ne: "null" } } } }
            ) {
              nodes {
                category
              }
            }
          }
        `}
        render={(data) => (
          <div style={{ backgroundColor: `#F2F3F7` }}>
            <Helmet htmlAttributes={{ lang: 'it' }} />
            <Header location={location} />
            {location.pathname.match(/\/articles/) && (
              <nav role="navigation" className="article__nav">
                {data.categories.nodes.map((c) => (
                  <Link
                    key="c.category"
                    to={`/articles/${kebabCase(c.category)}`}
                    style={{ margin: `0 10px` }}
                    className={
                      location.pathname.match(
                        new RegExp(`${kebabCase(c.category)}`)
                      )
                        ? 'active'
                        : ''
                    }
                  >
                    <span>{c.category}</span>
                  </Link>
                ))}
              </nav>
            )}
            <MobileHeader location={location} />
            <div className="container">{children}</div>
            <Footer />
          </div>
        )}
      />
    )
  }
}

export default Template
