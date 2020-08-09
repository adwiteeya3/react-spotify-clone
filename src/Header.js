import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
            <SearchIcon />
            <input 
                placeholder='Search for Artists, Songs, others...'
                type='type'
            />
            </div>

            <div className='header_right'>
                <Avatar src='' alt='AD' />
                <h4>Adwiteeya</h4>

            </div>

        </div>
    )
}

export default Header
