import React from 'react'

const portfolio = [
  {
    src: '../../../../static/gallery/Helm.jpg',
    title: 'helm',
  },
  {
    src: '../../../../static/gallery/Ps21.jpg',
    title: 'Price Street 21',
  },
  {
    src: '../../../../static/gallery/Spectrum.jpg',
    title: 'Spectrum',
  },
]

export default class Slides extends React.Component {
  renderSlides() {
    return portfolio.map(slide => {
      if (portfolio.indexOf(slide) === this.props.active) {
        return <img src={slide.src} className="active" key={slide.title} />
      } else {
        return <img src={slide.src} key={slide.title} />
      }
    })
  }
  render() {
    return (
      <div id="slides">
        {this.renderSlides()}
        <style jsx global>
          {`
            div#slides img {
              position: absolute;
              opacity: 0;
              width: 100%;
              transition: ease-out all 1s; 
            }
            div#slides img.active {
              opacity: 1;
            }
          `}
        </style>
      </div>
    )
  }
}
