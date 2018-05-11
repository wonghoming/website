import { mainBlue, cherryRed } from './themeColours'

export default props => (
  <h1>
    {props.text}
    <span>{props.append}</span>
    <style jsx>
      {`
        h1 {
          font-size: 1.6rem;
          text-transform: uppercase;
          color: ${props.white ? '#ffffff' : mainBlue};
          margin-bottom: 10px;
        }
        h1 span {
          color: ${cherryRed};
        }
        @media all and (min-width: 900px) {
          h1 {
            font-size: 1.8rem;
            color: ${props.white ? '#ffffff' : mainBlue};
            margin-bottom: 20px;
          }
        }
        @media all and (min-width: 1200px) {
          h1 {
            font-size: 2rem;
            text-transform: uppercase;
            color: ${props.white ? '#ffffff' : mainBlue};
            margin-bottom: 20px;
          }
          h1 span {
            color: ${cherryRed};
          }
        }
      `}
    </style>
  </h1>
)
