import { mainBlue, cherryRed } from './themeColours'

export default props => (
  <h1>
    {props.text}
    <span>{props.append}</span>
    <style jsx>
      {`
        h1 {
          font-size: 2rem;
          text-transform: uppercase;
          color: ${props.white ? '#ffffff' : mainBlue};
          margin-bottom: 20px;
        }
        h1 span {
          color: ${cherryRed};
        }
      `}
    </style>
  </h1>
)
