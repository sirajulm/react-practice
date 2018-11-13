import React, {Component} from 'react';
import axios from 'axios';

 class MyAvatar extends Component{
     constructor(props) {
         super(props);
         this.state = {
             image: undefined
         }
     }
     componentDidMount() {
         axios.get(`http://localhost:8080/${this.props.image}.json`).then((response)=> {
             this.setState({image: response.data.url})
         }).catch((error) => {
             console.log("MyAvatar", error);
         })
     }
     render() {
         return <div>
             <img src={this.state.image} alt="" style={{width: 200}} />
         </div>
     }
}

export default MyAvatar;