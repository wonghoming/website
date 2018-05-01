import React from 'react'
import Head from 'next/head'
import anime from 'animejs'

import LandingSection from './landingSection'
import ProcessSection from './processSection'
import GallerySection from './gallerySection'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { animateProcess: false }
    this.animateProcess = this.animateProcess.bind(this)
  }
  animateProcess() {
    const slideUp = anime({
      targets: 'section.landing',
      translateY: '-100%',
      duration: 500,
      easing: 'easeOutQuad',
    })
    this.setState({ animateProcess: true })
  }
  render() {
    return (
      <section>
        <Head>
          <title>Alex Ho Ming Wong</title>
        </Head>
        <LandingSection onClick={this.animateProcess} />
        <ProcessSection animate={this.state.animateProcess} />
        <GallerySection />
      </section>
    )
  }
}

export default Index
