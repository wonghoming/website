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
            body {
              overflow: hidden;
            }
            * {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
              font-family: lato, sans-serif;
            }
            p {
              font-size: 1.1rem;
              line-height: 1.6rem;
            }
            .invisible + .typed-cursor {
              visibility: hidden;
            }
            .container {
              width: 1440px;
              margin: 0 auto;
              padding: 100px 0 0;
              text-align: center;
            }
          `}
        </style>
      </div>
    )
  }
}
