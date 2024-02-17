// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {status: false}

  onClickAnswer = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    const {Item} = this.props
    const {questionText, answerText} = Item
    return (
      <li className="listcontainer">
        <div className="questioncont">
          <h1 className="heading">{questionText}</h1>
          {status ? (
            <button
              className="button"
              type="button"
              onClick={this.onClickAnswer}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                className="image"
                alt="icon"
              />
            </button>
          ) : (
            <button
              className="button"
              type="button"
              onClick={this.onClickAnswer}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                className="image"
                alt="icon"
              />
            </button>
          )}
        </div>
        <div className={status ? 'answercontvisi' : 'answercontnotvisi'}>
          <hr className="hrline" />
          <p className="heading">{answerText}</p>
        </div>
      </li>
    )
  }
}

export default FaqItem
