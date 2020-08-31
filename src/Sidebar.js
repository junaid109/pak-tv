import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OnDemandIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandedMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import SidebarRow from './SidebarRow';

import './Sidebar.css';

 function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>

            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" /> 
            <hr></hr>
            <SidebarRow Icon={VideoLibraryIcon} title="Library" /> 
            <SidebarRow Icon={HistoryIcon} title="History" /> 
            <SidebarRow Icon={OnDemandIcon} title="Your videos" /> 
            <SidebarRow Icon={WatchLaterIcon} title="Watch later" /> 
            <SidebarRow Icon={ThumbUpIcon} title="Liked Videos" /> 
            <SidebarRow Icon={ExpandedMoreOutlinedIcon} title="Show more" /> 
            <hr></hr>
        </div>
    );
}

export default Sidebar;