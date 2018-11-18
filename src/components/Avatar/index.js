import React, {Component} from 'react';
import AvatarContext from '../../contexts/AvatarContext';

import styled from 'styled-components';

const StyledAvatar = styled.img`
    border-radius:50%;
    `;

 class Avatar extends Component{
     static contextType = AvatarContext;
     render() {
         return <StyledAvatar width={this.props.width} height={this.props.height} src={`http://localhost:8080/images/${this.context}.jpg`} alt="" />
     }
}

export default Avatar;