import React from 'react'
import anime from 'animejs'

class MonkeyLogo extends React.Component {
  componentDidMount() {
    const logo = anime({
      targets: 'div.monkeyLogoWrapper',
      translateY: [-100, 0],
      duration: 1500,
      opacity: 1,
    })
  }
  render() {
    return (
      <div className="monkeyLogoWrapper">
        <img
          src="../../../static/monkeyLogoBlack-Animated.svg"
          alt="Monkey Head"
        />
        <style jsx>
          {`
            div.monkeyLogoWrapper {
              width: 50%;
              opacity: 0;
              text-align: right;
            }
            div.monkeyLogoWrapper img {
              width: 45%;
              max-width: 400px;
            }
          `}
        </style>
      </div>
    )
  }
}
export default MonkeyLogo
