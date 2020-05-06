import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import './gallery.scss'

class GalleryPage extends React.Component {
  state = {
    open: false,
    selectedImage: null,
  }

  handleClick = (image) => {
    console.log(image)
    this.setState({
      selectedImage: image.childImageSharp.fluid,
      open: true,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
      selectedImage: null,
    })
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`Gallery | ${siteTitle}`} />
        <Img
          fluid={this.props.data.nigiri.childImageSharp.fluid}
          className="full-width-img"
          style={{ marginBottom: `100px` }}
        />
        <h2 className="gallery__title">La mia gallery</h2>

        <div className="gallery__wrapper">
          {this.props.data.images.nodes.map((image) => (
            <div
              className="gallery__img"
              style={{ width: `30%`, display: `flex`, margin: `6px 0` }}
              onClick={(_) => this.handleClick(image)}
              image={image}
            >
              <Img fixed={image.childImageSharp.fixed} />
            </div>
          ))}
        </div>
        {this.state.open && (
            <div className="centerpoint">
              <dialog
                className="dialog"
                style={{ position: 'absolute', minWidth: `600px` }}
                open={this.state.open}
                onClick={this.handleClose}
              >
                <Img fluid={this.state.selectedImage} />
              </dialog>
            </div>
          )}
      </Layout>
    )
  }
}

export default GalleryPage

export const pageQuery = graphql`
  query GalleryQuery {
    site {
      siteMetadata {
        title
      }
    }
    nigiri: file(relativePath: { eq: "nigiri.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    images: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      nodes {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
