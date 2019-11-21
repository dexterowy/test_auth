import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100px;
  margin: 100px auto;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://172.20.10.3:3000/login", {email: this.state.email, password: this.state.password})
      .then((res, req) => {
        console.log(res.data.token);
      });
  }

  render() {
    return (
      <div>
        <h1>Auth</h1>
        <StyledForm>
          <label>
            email:
            <input
              style={{ margin: "10px" }}
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={e => this.inputHandler(e, "email")}
            />
          </label>
          <label>
            password:
            <input
              style={{ margin: "10px" }}
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={e => this.inputHandler(e, "password")}
            />
          </label>
          <button type="submit" onClick={this.submitHandler}>Log in</button>
        </StyledForm>
      </div>
    );
  }
}


export default App;
