import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledMyAvatar = styled.div`
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #000;
    `;

 class MyAvatar extends Component{
     constructor(props) {
         super(props);
         this.state = {
             image: undefined
         }
     }
     componentDidMount() {
         axios.get(`http://localhost:8080/assets/${this.props.image}`).then((response)=> {
             this.setState({image: response.data.url})
         }).catch((error) => {
             console.log("MyAvatar", error);
         })
     }
     render() {
         const {width, height} = this.props;
         return <StyledMyAvatar style={{width, height}}>
             <img src={this.state.image} alt="" style={{width, height}} />
         </StyledMyAvatar>
     }
}

export default MyAvatar;