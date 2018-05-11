import React from 'react'
import Head from 'next/head'
import anime from 'animejs'
import _ from 'lodash'

import LandingSection from './landingSection'
import ProcessSection from './processSection'
import GallerySection from './gallerySection'
import Footer from './FooterSection'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { animateProcess: false, offScreen: false }
    this.animateProcess = this.animateProcess.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.showTop = this.showTop.bind(this)
  }
  animateProcess() {
    const windowHeight = window.innerHeight
    if (window.innerWidth >= 1200) {
      const slideUp = anime({
        targets: 'section.landing',
        translateY: '-100%',
        duration: 500,
        easing: 'easeOutQuad',
      })
      this.setState({ offScreen: true })
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    } else {
      window.scrollTo({
        top: windowHeight,
        behavior: 'smooth',
      })
    }
    this.setState({ animateProcess: true })
  }
  handleScroll() {
    if (this.state.animateProcess === false) {
      if (window.pageYOffset > window.innerHeight / 2) {
        this.setState({ animateProcess: true })
      }
    }
  }
  showTop() {
    if (this.state.offScreen && window.innerWidth < 1200) {
      const slideDown = anime({
        targets: 'section.landing',
        translateY: 0,
        duration: 500,
        easing: 'easeOutQuad',
      })
      this.setState({ offScreen: false })
    }
  }
  componentDidMount() {
    if (window.pageYOffset > window.innerHeight / 2) {
      this.setState({ animateProcess: true })
    }
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.showTop)
  }
  render() {
    return (
      <section>
        <Head>
          <title>Alex Ho Ming Wong</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <LandingSection onClick={this.animateProcess} />
        <ProcessSection animate={this.state.animateProcess} />
        <GallerySection />
        <Footer />
      </section>
    )
  }
}

export default Index
