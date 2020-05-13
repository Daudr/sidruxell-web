import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/layout'

import './gallery.scss'

class GalleryPage extends React.Component {
  state = {
    selectedImage: this.props.data.images.nodes[0].childImageSharp.fluid,
  }

  handleClick = (image) => {
    this.setState({
      selectedImage: image.childImageSharp.fluid,
    })
    document.getElementsByTagName('body')[0].classList.add('dialog-open')
    document.getElementById('dialog').showModal()
  }

  handleClose = () => {
    this.setState({
      selectedImage: this.props.data.images.nodes[0].childImageSharp.fluid,
    })
    document.getElementsByTagName('body')[0].classList.remove('dialog-open');
    document.getElementById('dialog').close()
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
              onClick={(_) => this.handleClick(image)}
              image={image}
            >
              <Img fixed={image.childImageSharp.fixed} />
            </div>
          ))}
        </div>
        <div className="centerpoint">
          <dialog
            id="dialog"
            className="dialog"
            style={{ position: 'absolute', minWidth: `600px` }}
            onClick={this.handleClose}
          >
            <Img fluid={this.state.selectedImage} />
          </dialog>
        </div>
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
