import React from 'react'
import Slides from './SlideShow/Slides'
import Indicators from './SlideShow/Indicators'

export default class SliderWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
    this.changeIndex = this.changeIndex.bind(this)
  }
  resetIndex(slides) {
    if (this.state.currentIndex >= slides.length) {
      this.setState({ currentIndex: 0 })
    }
  }
  hideAll(slides) {
    slides.forEach(slide => {
      slide.style.opacity = '0'
    })
  }
  showSlide(slides) {
    slides[this.state.currentIndex].style.opacity = '1'
  }

  changeIndex() {
    this.setState({ currentIndex: this.state.currentIndex + 1 })
    this.slideShow()
  }
  slideShow() {
    const slides = document.querySelectorAll('.slides')
    console.log(slides[0].childNodes[0].clientHeight)
    document.getElementById('carousel').style.height = `${
      slides[0].clientHeight
      // slides[0].childNodes[0].clientHeight
    }px`
    this.resetIndex(slides)
    this.hideAll(slides)
    this.showSlide(slides)
    setTimeout(this.changeIndex, 3000)
  }
  componentDidMount() {
    this.slideShow()
  }
  render() {
    return (
      <div>
        <div className="carouselWrapper" id="carousel">
          <Slides src="Helm.jpg" />
          <Slides src="Spectrum.jpg" />
          <Slides src="Ps21.jpg" />
          <Indicators />
        </div>
        <style jsx>
          {`
            div.carouselWrapper {
              position: relative;
              display: flex;
            }
          `}
        </style>
      </div>
    )
  }
}
