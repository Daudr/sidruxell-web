import React from 'react'
import './base.scss'
import Container from './container'
import Header from './header/header'
import MobileHeader from './mobile-header/mobile-header'
import Footer from './footer/footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Header location={location} />
        <MobileHeader location={location} />
        <Container>{children}</Container>
        <Footer />
      </div>
    )
  }
}

export default Template
