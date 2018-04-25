import React from 'react'
import Typed from 'typed.js'

class TypedTextAnimation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hidden: 'invisible' }
    this.removeCursor = this.removeCursor.bind(this)
  }
  removeCursor() {
    const { cursorLinger, cursorId } = this.props
    setTimeout(function() {
      document.querySelectorAll('.typed-cursor')[cursorId].style.display =
        'none'
    }, cursorLinger)
  }
  delayRender() {
    const { delayRender } = this.props
    const component = this
    setTimeout(function delay() {
      component.setState({ hidden: '' })
    }, delayRender)
  }
  componentWillMount() {
    this.delayRender()
  }
  componentDidMount() {
    const {
      strings,
      typeSpeed,
      cursorChar,
      startDelay,
      removeCursor,
    } = this.props

    const options = {
      strings,
      typeSpeed: 70,
      cursorChar,
      autoInsertCss: true,
      startDelay,
      onComplete: removeCursor ? this.removeCursor : function() {},
    }
    this.typed = new Typed(this.el, options)
  }
  render() {
    console.log()
    return (
      <span className={this.state.hidden} ref={el => (this.el = el)}>
        <style jsx>
          {`
            span {
              whitespace: pre;
            }
          `}
        </style>
        <style jsx global>{`
          .typed-cursor {
            color: #ffffff;
            animation-name: flashing;
            animation-duration: 0.8s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          @keyframes flashing {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}</style>
      </span>
    )
  }
}

export default TypedTextAnimation
