import MonkeyLogo from './MonkeyLogo'
import LandingMessage from './LandingMessage'
import TypedTextAnimation from './TypedTextAnimation'
import { mainBlue } from '../shared/themeColours'

export default props => (
  <section className="landing">
    <div className="blue-bg" />
    <MonkeyLogo />
    <LandingMessage onClick={props.onClick} />
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
          flex-wrap: wrap;
          align-content: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          z-index: 2;
        }
        @media all and (min-width: 1200px) {
          section.landing {
            position: fixed;
            flex-wrap: nowrap;
            top: 0;
            align-items: center;
          }
        }
      `}
    </style>
  </section>
)
