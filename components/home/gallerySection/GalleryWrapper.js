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
  slideShow(newIndex) {
    if (!newIndex) {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    } else {
      this.setState({ currentIndex: newIndex.target.value })
    }
    if (this.state.currentIndex >= this.state.indicatorAmount) {
      this.setState({ currentIndex: 0 })
    }
  }
  componentDidMount() {
    this.setState({
      indicatorAmount: document.getElementById('slides').childNodes.length,
    })
    this.interval = setInterval(this.slideShow, 5000)
  }
  componentDidUpdate() {
    clearInterval(this.interval)
    this.interval = setInterval(this.slideShow, 5000)
  }

  render() {
    return (
      <div>
        <div className="carouselWrapper" id="carousel">
          <Slides active={this.state.currentIndex} />
          <Indicators
            indicatorAmount={this.state.indicatorAmount}
            active={this.state.currentIndex}
            onClick={this.slideShow}
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
