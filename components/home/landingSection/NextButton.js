import React from 'react'
import { cherryRed } from '../shared/themeColours'

class NextButton extends React.Component {
  render() {
    return (
      <p className="next" onClick={this.props.onClick}>
        Click to find out more
        <style jsx>
          {`
            p {
              transition: 0.2s ease-out all;
            }
            p:hover {
              cursor: pointer;
              color: ${cherryRed};
            }
          `}
        </style>
      </p>
    )
  }
}

export default NextButton
