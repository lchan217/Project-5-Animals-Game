//persist to backend
import React from 'react';
import { connect } from 'react-redux';
import {addUser} from '../../actions/userActions.js'

class UserForm extends React.Component {
  constructor() {
  super();
  this.state = {
    name: '',
  };
  this.handleSubmit = this.handleSubmit.bind(this)
}

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

    handleSubmit = event => {
    event.preventDefault()
    this.props.addUser(this.state)
    this.setState({
      name: ''
    })

    fetch('http://localhost:3001/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: this.state.name}),
        })
        .then((response) => {return response.json()})

    alert(`Welcome ${this.state.name}! Please navigate to the instruction page.`)
  }

  render() {
    return (
      <div>
      Please enter your name:
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  }
}

export default connect(null, mapDispatchToProps)(UserForm)
