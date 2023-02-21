import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {userInput: '', isSaved: false}

  onChangeSearch = event => {
    this.setState({userInput: event.target.value})
  }

  save = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {userInput, isSaved} = this.state
    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="title">Editable Text Input</h1>
          <div className="input-cont">
            {isSaved ? (
              <div className="para-cont">
                <p className="desc">{userInput}</p>
              </div>
            ) : (
              <input
                type="text"
                value={userInput}
                className="box"
                onChange={this.onChangeSearch}
              />
            )}
            <button className="save-button" type="button" onClick={this.save}>
              {isSaved ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
