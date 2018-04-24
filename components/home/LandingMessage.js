export default () => (
  <div className="messageWrapper">
    <h3>Alex H. M. Wong</h3>
    <hr />
    <h2>A Freelance</h2>
    <h1>
      <span>Web Developer</span>
      <br />& <span>Designer</span>
    </h1>
    <p>Find out more</p>
    <style jsx>{`
      div.messageWrapper {
        margin-left: 50px;
      }
      h1,
      h3 {
        text-transform: uppercase;
      }
      h3 {
        color: #ffffff;
        font-weight: 300;
        margin-bottom: 10px;
        font-size: 1.2rem;
        letter-spacing: 0.12rem;
      }
      hr {
        width: 10%;
        margin-bottom: 20px;
      }
      h2 {
        color: #ffffff;
        font-weight: 400;
        font-size: 1.8rem;
        margin-bottom: -10px;
        letter-spacing: 0.1rem;
        font-family: Arima Madurai;
        font-style: italic;
      }
      h1 {
        font-size: 3rem;
        line-height: 3.7rem;
        letter-spacing: 0.1rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 30px;
      }
      h1 span:first-child {
        color: #0b6eaa;
      }
      h1 span:last-child {
        color: #d1314d;
      }
      p {
        color: #ffffff;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
      }
    `}</style>
  </div>
)
