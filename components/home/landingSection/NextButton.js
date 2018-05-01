import React from 'react'
import anime from 'animejs'

class NextButton extends React.Component {
  render() {
    return (
      <p onClick={this.props.onClick}>
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
