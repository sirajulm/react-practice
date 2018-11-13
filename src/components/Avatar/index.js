import React, {Component} from 'react';
import AvatarContext from '../../contexts/AvatarContext';


 class Avatar extends Component{
     static contextType = AvatarContext;
     render() {
         return <img src={`http://localhost:8080/images/${this.context}.jpg`} alt="" style={{width: 200}} />
     }
}

export default Avatar;