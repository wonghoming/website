import React from 'react'
import anime from 'animejs'

import TypedTextAnimation from './TypedTextAnimation'
import NextButton from './NextButton'
import {lightBlue, cherryRed} from '../shared/themeColours'


class LandingMessage extends React.Component {
  componentDidMount() {
    const line = anime({
      targets: '.messageWrapper hr',
      width: '+=70px',
      opacity: 1,
      delay: 3500,
    })

    const info = anime({
      targets: '.messageWrapper p',
      opacity: 1,
      translateY: '-=20',
      delay: 10000,
    })
  }
  render() {
    return (
      <div className="messageWrapper">
        <h3>
          <TypedTextAnimation
            strings={['Alex H. M. Wong']}
            removeCursor="true"
            cursorLinger="800"
            cursorId="0"
            delayRender="1000"
            startDelay="1000"
          />
        </h3>
        <hr />

        <h2>
          <TypedTextAnimation
            strings={['A Freelance']}
            removeCursor="true"
            startDelay="5000"
            cursorLinger="200"
            cursorId="1"
            delayRender="4500"
          />
        </h2>
        <h1>
          <TypedTextAnimation
            strings={[
              "<span class='blue'>Web Developer</span><br />	&amp; <span class='red'>Designer</span>",
            ]}
            startDelay="6300"
            delayRender="6300"
          />
        </h1>
        <NextButton />
        <style jsx global>{`
          div.messageWrapper {
            margin-left: 50px;
            width:55%;
          }
          div.messageWrapper h1,
          div.messageWrapper h3 {
            text-transform: uppercase;
          }
          div.messageWrapper h3 {
            color: #ffffff;
            font-weight: 300;
            margin-bottom: 10px;
            font-size: 1.2rem;
            letter-spacing: 0.12rem;
          }
          div.messageWrapper hr {
            width: 0px;
            opacity: 0;
            margin-bottom: 20px;
          }
          div.messageWrapper h2 {
            color: #ffffff;
            font-weight: 400;
            font-size: 1.8rem;
            margin-bottom: -10px;
            letter-spacing: 0.1rem;
            font-family: Arima Madurai;
            font-style: italic;
          }
          div.messageWrapper h1 {
            font-size: 3rem;
            line-height: 3.7rem;
            letter-spacing: 0.1rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 30px;
          }
          div.messageWrapper h1 span.blue {
            color: ${lightBlue};
          }
          div.messageWrapper h1 span.red {
            color: ${cherryRed};
          }
          div.messageWrapper p {
            opacity: 0;
            margin-top: 50px;
            color: #ffffff;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
          }
        `}</style>
      </div>
    )
  }
}

export default LandingMessage