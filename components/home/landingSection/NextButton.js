import React from 'react'
import anime from 'animejs'

class NextButton extends React.Component {
  slideUp() {
    const slideUp = anime({
      targets: 'section.landing',
      translateY: '-100%',
      duration: 500,
      easing: 'easeOutQuad',
    })
  }
  render() {
    return (
      <p onClick={this.slideUp}>
        Find out more
        <style jsx>
          {`
            p:hover {
              cursor: pointer;
            }
          `}
        </style>
      </p>
    )
  }
}

export default NextButton
