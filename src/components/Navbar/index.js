import React from 'react';
import AvatarContext from '../../contexts/AvatarContext';
import User from '../User';

const Navbar = (props) => {
    return <AvatarContext.Provider value={props.avatar}>
        <nav className='navbar'>
            <User/>
        </nav>
    </AvatarContext.Provider>
}

export default Navbar;