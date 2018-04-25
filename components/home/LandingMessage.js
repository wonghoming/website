import React from 'react'
import TypedTextAnimation from './TypedTextAnimation'

class LandingMessage extends React.Component {
  render() {
    return (
      <div className="messageWrapper">
        <h3>
          <TypedTextAnimation
            strings={['Alex H. M. Wong']}
            cursorChar="_"
            removeCursor="true"
            test="hello"
            cursorLinger="1600"
            cursorId="0"
            delayRender="0"
          />
        </h3>
        <hr />

        <h2>
          <TypedTextAnimation
            strings={['A Freelance']}
            cursorChar="_"
            removeCursor="true"
            startDelay="4000"
            cursorLinger="200"
            cursorId="1"
            delayRender="3500"
          />
        </h2>
        <h1>
          <TypedTextAnimation
            strings={[
              "<span class='blue'>Web Developer</span><br />	&amp; <span class='red'>Designer</span>",
            ]}
            cursorChar="_"
            startDelay="5500"
            delayRender="5200"
          />
        </h1>
        <h1 />
        <p>Find out more</p>
        <style jsx global>{`
          div.messageWrapper {
            margin-left: 50px;
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
            width: 10%;
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
            color: #0b6eaa;
          }
          div.messageWrapper h1 span.red {
            color: #d1314d;
          }
          div.messageWrapper p {
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
