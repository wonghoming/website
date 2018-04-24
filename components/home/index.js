import Head from 'next/head'
import MonkeyLogo from './MonkeyLogo'
import LandingMessage from './LandingMessage'
export default () => (
  <div>
    <Head>
      <title>Alex Ho Ming Wong</title>
    </Head>
    <div className="layout">
      <MonkeyLogo />
      <LandingMessage />      
    </div>
    <style jsx>{`
      div.layout {
        display: flex;
        height: 100vh;
        width: 100%;
        background-color: #0d2e51;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)
