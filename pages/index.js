import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../components/home'
import Head from 'next/head'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Arima+Madurai"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lobster"
            rel="stylesheet"
          />
        </Head>
        <Home />
        <style jsx global>
          {`
            * {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
              font-family: lato, sans-serif;
            }
            p {
              font-size: 1rem;
              line-height: 1.4rem;
            }
            .invisible + .typed-cursor {
              visibility: hidden;
            }
            .container {
              width: 100%;
              margin: 0 auto;
              padding: 50px 10px 50px;
              text-align: center;
            }
            @media all and (min-width: 600px) {
              .container {
                padding: 60px 10px 60px;
              }
            }
            @media all and (min-width: 900px) {
              .container {
                padding: 80px 10px 80px;
              }
            }
            @media all and (min-width: 1200px) {
              body {
                overflow: hidden;
              }
              p {
                font-size: 1.1rem;
                line-height: 1.6rem;
              }
              .container {
                max-width: 1440px;
                padding: 100px 0 0;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
