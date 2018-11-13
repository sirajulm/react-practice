import React, { Component } from 'react';
import { connect } from 'react-redux';

import { callApi } from './actions/apiActions';
import './App.css';

import List from './components/List';
import Navbar from './components/Navbar';
import MyAvatar from './components/MyAvatar';

const jsonData = [
  {id: 'a',value: 'Item 1'}, 
  {id: 'b',value: 'Item 2'}, 
  {id: 'c',value: 'Item 3'}, 
  {id: 'd',value: 'Item 4'}, 
  {id: 'e',value: 'Item 5'}, 
  {id: 'f',value: 'Item 6'}
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: jsonData,
      avatar: 'cat',
      interval: undefined
    }
  }
  componentDidMount() {
    this.props.dispatch(callApi('cat'));
    const array = [...this.state.list];
    const avatar = 'cat1';
    const timeoutVar = setTimeout(() => {
      array.splice(0,1);
      this.setState({
        list: array,
        avatar
      });
    }, 5000);
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="list">
          <Navbar avatar={this.state.avatar}/>
          <List data={this.state.list} />
          <MyAvatar image={this.state.avatar} />
          <MyAvatar key={this.state.avatar} image={this.state.avatar} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({api}) => ({ ...api});

// const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps)(App);
