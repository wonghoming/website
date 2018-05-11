import { mainBlue } from '../shared/themeColours'

export default () => (
  <div>
    <p>
      Contact me via:{' '}
      <a href="mailto:wonghoming.dev@gmail.com">
        <img src="../../../static/icons/email.png" />
      </a>
      <a href="https://www.linkedin.com/in/alex-wong-8568bb93/">
        <img src="../../../static/icons/linkedin.png" />
      </a>
    </p>
    <style jsx>
      {`
        h4 {
          font-size: 1.8rem;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-weight: 400;
        }
        div {
          background-color: ${mainBlue};
          color: #ffffff;
          padding: 5px 30px;
          text-align: right;
        }
        p {
          font-size: 1rem;
          font-weight: 300;
        }
        p img {
          width: 20px;
          vertical-align: middle;
          margin: 0 5px;
        }
        p a {
          text-decoration: none;
          color: #ffffff;
        }
        p a:hover {
          cursor: pointer;
          opacity: 0.8;
        }
        @media all and (min-width: 900px) {
          p.email a {
            color: red;
          }
        }
      `}
    </style>
  </div>
)
