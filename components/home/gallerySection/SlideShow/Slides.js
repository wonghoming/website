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
  renderDescription() {
    if (
      portfolio[this.props.active].description ||
      portfolio[this.props.active].link
    ) {
      return (
        <div className="description">
          <p>{portfolio[this.props.active].description}</p>
          {portfolio[this.props.active].description &&
          portfolio[this.props.active].link ? (
            <hr />
          ) : (
            ''
          )}
          {portfolio[this.props.active].link ? (
            <a href={portfolio[this.props.active].link} target="_blank">
              Click here to view
            </a>
          ) : (
            ''
          )}
        </div>
      )
    }
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
        {this.renderDescription()}
        <style jsx global>
          {`
            div.title {
              position: absolute;
              top: 30px;
              background-color: ${this.props.active % 2 === 0
                ? mainBlue
                : cherryRed};
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
              max-width: 40%;
              padding: 15px 40px;
              background-color: ${this.props.active % 2 === 0
                ? mainBlue
                : cherryRed};
              color: #ffffff;
            }
            div.description p {
              font-size: 1rem;
              line-height: 1.4rem;
            }
            div.description hr {
              width: 5%;
              margin: 10px 0;
            }
            div.description a {
              text-decoration: none;
              color: #ffffff;
            }
            div.description a:hover {
              text-decoration: underline;
            }
          `}
        </style>
      </div>
    )
  }
}
