import React, {Component} from 'react';
import styled from 'styled-components';

import MyAvatar from '../../components/MyAvatar';
import List from '../../components/List';

const StyledAvatarContainer = styled.div`
    display:flex;
    justify-content: center;
    `;

const jsonData = [
    {id: 'a',value: 'Item 1'}, 
    {id: 'b',value: 'Item 2'}, 
    {id: 'c',value: 'Item 3'}, 
    {id: 'd',value: 'Item 4'}, 
    {id: 'e',value: 'Item 5'}, 
    {id: 'f',value: 'Item 6'}
  ];

class Home extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          list: jsonData,
          timeout: undefined,
          avatar:'cat'
        }
      }

      componentDidMount() {
        const array = [...this.state.list];
        const avatar = 'cat1';
        const timeoutVar = setTimeout(() => {
          array.splice(0,1);
          this.setState({
            list: array,
            avatar
          });
        }, 5000);

        this.setState({timeout: timeoutVar})
      }
      render() {
          return <div>
                <StyledAvatarContainer>
                    <MyAvatar image={this.state.avatar}  width={100} height={100}/>
                    <MyAvatar key={this.state.avatar} image={this.state.avatar} width={100} height={100}/>
                </StyledAvatarContainer>
                <List data={this.state.list} />
              </div>
      }
      componentWillUnmount() {
          clearTimeout(this.state.timeout);
      }
    
};

export default Home;