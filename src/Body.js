import React from 'react';
import './Body.css';
import Header from './Header';

function Body({ spotify }) {
    return (
        <div className='body'>
            <Header spotify={spotify}/>

            <div className='body_info'>
                <img src='\image\spotify.jpg' alt='' />
                <div className='body_infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p> Discription..</p>
                </div>
            </div>
        </div>
    );
}

export default Body;
