import React from 'react'
import { lightBlue, mainBlue, cherryRed } from '../../shared/themeColours'

export default class Indicators extends React.Component {
  renderIndicators() {
    const indicatorAmount = this.props.indicatorAmount
    const indicators = []
    for (let i = 0; i < indicatorAmount; i++) {
      if (i === this.props.active) {
        indicators.push(
          <li
            key={i}
            className="active"
            onClick={this.props.onClick}
            value={i}
          />,
        )
      } else {
        indicators.push(<li key={i} onClick={this.props.onClick} value={i} />)
      }
    }
    return indicators
  }
  componentDidMount() {
    if (window.innerWidth <= 1200) {
      document.getElementById('indicators').style.display = 'none'
    }
  }
  render() {
    return (
      <ul className="indicators" id="indicators">
        {this.renderIndicators()}
        <style jsx>{`
          ul.indicators {
            position: absolute;
            bottom: 0;
            align-self: flex-end;
            width: 200px;
            list-style: none;
            padding: 20px 0;
          }
        `}</style>
        <style jsx global>{`
          ul.indicators li {
            background-color: ${mainBlue};
            height: 15px;
            width: 40px;
            margin: 0 0 10px;
            transition: 0.5s ease-out all;
          }
          ul.indicators li:nth-child(even) {
            background-color: ${cherryRed};
          }
          ul.indicators li:hover {
            cursor: pointer;
          }
          ul.indicators li.active {
            width: 70px;
          }
        `}</style>
      </ul>
    )
  }
}
