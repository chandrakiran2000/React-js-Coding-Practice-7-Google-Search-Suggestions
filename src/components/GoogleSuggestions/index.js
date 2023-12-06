// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchText: ''}

  searchInput = event => {
    this.setState({searchText: event.target.value})
  }

  addText = suggestion => {
    this.setState({searchText: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchText} = this.state
    const searchList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchText.toLowerCase()),
    )

    return (
      <div className="bg-card">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="search-card">
          <div className="icon-search-card">
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              className="input-search"
              placeholder="Search Google"
              onChange={this.searchInput}
              value={searchText}
            />
          </div>
          <ul className="sug-card">
            {searchList.map(each => (
              <SuggestionItem
                textAdd={this.addText}
                sugList={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
