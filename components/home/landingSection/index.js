import MonkeyLogo from './MonkeyLogo'
import LandingMessage from './LandingMessage'
import TypedTextAnimation from './TypedTextAnimation'
import { mainBlue } from '../shared/themeColours'

export default () => (
  <section className="landing">
    <div className="blue-bg" />
    <MonkeyLogo />
    <LandingMessage />
    <style jsx>
      {`
        div.blue-bg {
          height: 100vh;
          width: 100%;
          background-color: ${mainBlue};
          opacity: 0.95;
          position: absolute;
          z-index: -1;
          top: 0;
        }
        section.landing {
          display: flex;
          height: 100vh;
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 2;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </section>
)
