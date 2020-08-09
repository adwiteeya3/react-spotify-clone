import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


function Sidebar() {
    return (
        <div className='sidebar'>
            <img className='sidebar_logo' 
             src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' 
             alt='' 
            />
            <SidebarOption title="Home" />
            <SidebarOption title="Search" />
            <SidebarOption title="Your Library" />

        </div>
    );
}

export default Sidebar;
