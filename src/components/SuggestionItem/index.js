// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {sugList, textAdd} = props
  const {suggestion} = sugList
  const buttonAdd = () => {
    textAdd(suggestion)
  }
  return (
    <li className="suggestion-card">
      <p className="suggestion-text">{suggestion}</p>
      <button className="arrow-btn" onClick={buttonAdd} type="button">
        <img
          className="arrow-img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

// <img className="arrow-img" src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt=""/>
