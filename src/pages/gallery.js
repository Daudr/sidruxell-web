import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/layout'

import './gallery.scss'

class GalleryPage extends React.Component {
  state = {
    selectedImage: this.props.data.pageInfo.images[0].fluid,
  }

  handleClick = (image) => {
    this.setState({
      selectedImage: image.fluid,
    })
    document.getElementsByTagName('body')[0].classList.add('dialog-open')
    document.getElementById('dialog').showModal()
  }

  handleClose = () => {
    this.setState({
      selectedImage: this.props.data.pageInfo.images[0].fluid,
    })
    document.getElementsByTagName('body')[0].classList.remove('dialog-open');
    document.getElementById('dialog').close()
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    const pageInfo = get(this, 'props.data.pageInfo')
    const heroImage = pageInfo.heroImage.fluid;

    return (
      <Layout location={this.props.location}>
        <Helmet title={`Gallery | ${siteTitle}`}>
          <meta name="description" content="Galleria di Immagini di Sid Ruxell" />
        </Helmet>
        <Img
          fluid={heroImage}
          className="full-width-img"
          style={{ marginBottom: `100px` }}
        />
        <h2 className="gallery__title">La mia gallery</h2>

        <div className="gallery__wrapper">
          {pageInfo.images.map((image) => (
            <div
              className="gallery__img"
              onClick={(_) => this.handleClick(image)}
              image={image}
            >
              <Img fixed={image.fixed} />
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
            <Img className="dialog__img" fluid={this.state.selectedImage} />
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
    pageInfo: contentfulWebPage(webPageTitle:{ eq: "Gallery" }) {
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      images: gallery {
        fixed {
          ......GatsbyContentfulFixed_withWebp
        }
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
