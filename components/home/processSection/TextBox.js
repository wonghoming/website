import {
  mainBlue,
  lightBlue,
  cherryRed,
  darkRed,
  grey,
} from '../shared/themeColours'

export default props => {
  let backgroundColor
  let titleColor
  let tagColor
  if (props.backgroundColor === 'grey') {
    backgroundColor = '#e9e8e8'
    titleColor = grey
    tagColor = '#787273'
  } else if (props.backgroundColor === 'red') {
    backgroundColor = '#eddcdc'
    titleColor = darkRed
    tagColor = cherryRed
  } else if (props.backgroundColor === 'blue') {
    backgroundColor = '#dadbe4'
    titleColor = mainBlue
    tagColor = lightBlue
  }
  return (
    <div className="box">
      <h2>{props.title}</h2>
      <h3>{props.tagline}</h3>
      <hr />
      <p>{props.text}</p>
      <style jsx>
        {`
          div.box {
            background-color: ${backgroundColor};
            width: 30%;
            padding: 50px 40px;
            opacity: 0;
            z-index: -1;
          }
          div.box h2 {
            text-transform: uppercase;
            margin-bottom: 5px;
            color: ${titleColor};
          }
          div.box h3 {
            margin-bottom: 15px;
            color: ${tagColor};
            font-weight: 400;
          }
          div.box hr {
            width: 20px;
            margin: 0 auto 15px;
          }
          p {
            color: #58585a;
          }
        `}
      </style>
    </div>
  )
}
