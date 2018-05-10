import React from 'react'
import { cherryRed, mainBlue } from '../../shared/themeColours'
import portfolio from './portfolio'

export default class Slides extends React.Component {
  renderSlides() {
    return portfolio.map(slide => {
      return (
        <img
          key={slide.title}
          className={
            portfolio.indexOf(slide) === this.props.active ? 'active' : ''
          }
          src={slide.src}
          alt={slide.title}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <div className="title">
          <h4>{portfolio[this.props.active].title}</h4>
        </div>
        <div id="slides" className="slides">
          {this.renderSlides()}
        </div>
        <div className="description">
          {portfolio[this.props.active].description}
        </div>
        <style jsx global>
          {`
            div.title {
              position: absolute;
              top: 30px;
              background-color: ${mainBlue};
              padding: 15px 40px;
              z-index: 1;
              transition: all ease-in 0.5s;
            }
            div.title h4 {
              color: #ffffff;
              text-transform: uppercase;
            }
            div.slide {
            }
            div.slides img {
              position: absolute;
              display: block;
              opacity: 0;
              transition: ease-in all 1s;
              width: 100%;
            }
            div.slides img.active {
              opacity: 1;
              position: static;
            }
            div.description {
              position: absolute;
              right: 0;
              bottom: 30px;
              padding: 15px 40px;
              background-color: ${mainBlue};
              color: #ffffff;
            }
          `}
        </style>
      </div>
    )
  }
}
