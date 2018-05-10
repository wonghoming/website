import { mainBlue } from '../shared/themeColours'

export default () => (
  <div>
    <h4>Contact me</h4>
    <p>
      If you like to contact me about any possible jobs or even just have a
      query which you would like to discuss, please feel free to email me using
      the address below.
    </p>
    <p className="email">
      <a href="mailto:wonghoming.dev@gmail.com">wonghoming.dev@gmail.com</a>
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
          padding: 70px 0;
          text-align: center;
        }
        p {
          margin-bottom: 20px;
        }
        p.email {
          font-size: 1.4rem;
        }
        p.email a {
          text-decoration: none;
          color: #ffffff;
        }
        p.email a:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      `}
    </style>
  </div>
)
