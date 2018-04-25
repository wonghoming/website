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
          src="../../static/monkeyLogoBlack-Animated.svg"
          alt="Monkey Head"
        />
        <style jsx>
          {`
            div.monkeyLogoWrapper {
              width: 20%;
              opacity: 0;
            }
            div.monkeyLogoWrapper img {
              width: 100%;
            }
          `}
        </style>
      </div>
    )
  }
}
export default MonkeyLogo
