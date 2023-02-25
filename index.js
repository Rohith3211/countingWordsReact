/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-children-prop */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {textLength: 0}

  changeEvent = event => {
    this.setState({textLength: event.target.value.length})
  }

  render() {
    const {textLength} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>
            Calculate the <div children="" /> Letters you <div children="" />
            enter
          </h1>
          <label className="label" htmlFor="mytext">
            Enter the phrase
          </label>
          <div children="" />
          <input
            className="input"
            id="mytext"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.changeEvent}
          />
          <p className="display">No.of Letters: {textLength}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}

export default LettersCalculator
