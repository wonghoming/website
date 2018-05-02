import React from 'react'
import Slides from './SlideShow/Slides'
import Indicators from './SlideShow/Indicators'

export default class SliderWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      indicatorAmount: 0,
    }
    this.slideShow = this.slideShow.bind(this)
  }
  slideShow() {
    const slides = document.getElementById('slides').childNodes.length
    this.setState({ currentIndex: this.state.currentIndex + 1 })
    if (this.state.currentIndex >= slides) {
      this.setState({ currentIndex: 0 })
    }
  }
  indicatorAmount() {
    this.setState({
      indicatorAmount: document.getElementById('slides').childNodes.length,
    })
  }
  componentDidMount() {
    this.indicatorAmount()
    this.interval = setInterval(this.slideShow, 5000)
  }
  render() {
    console.log('currrent', this.state.currentIndex)
    return (
      <div>
        <div className="carouselWrapper" id="carousel">
          <Slides active={this.state.currentIndex} />
          <Indicators
            indicatorAmount={this.state.indicatorAmount}
            active={this.state.currentIndex}
          />
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
