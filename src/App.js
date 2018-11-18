import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { callApi } from './actions/apiActions';
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: 'cat',
      timeout: undefined
    }
  }
  componentDidMount() {
    const avatar = 'cat1';
    const timeoutVar = setTimeout(() => {
      this.setState({
        avatar
      });
    }, 5000);

    this.setState({timeout: timeoutVar})
  }
  render() {
    
    return (
      <div className="App">
          <Navbar avatar={this.state.avatar}/>
          <Main/>
      </div>
    );
  }
  componentWillUnmount() {
    clearTimeout(this.state.timeout);
}
}

// const mapStateToProps = ({api}) => ({ ...api});

export default withRouter(connect()(App));
