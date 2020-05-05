import React from 'react'
import { Link } from 'gatsby'
import './base.scss'
import Container from './container'
import Navigation from './navigation'
import Header from './header/header'
import Footer from './footer/footer';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Header location={location}></Header>
        <Container>{children}</Container>
        <Footer></Footer>
      </div>
    )
  }
}

export default Template
