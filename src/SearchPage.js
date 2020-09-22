import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";
import "./ChannelRow";
import "./ChannelRow.css";
import ChannelRow from './ChannelRow';

function SearchPage() {
    return ( 
        <div className="searchPage">
        <div className="searchPage__filter"> 
        <TuneOutlinedIcon>
        </TuneOutlinedIcon>
        <h2>FILTER</h2>
        </div>
        <hr></hr>
        <ChannelRow         
        image="https://yt3.ggpht.com/a-/AOh14Gi_k666gCRCjD7SIn0GbdqYZFKdZ1BS38xiRQ=s68-c-k-c0x00ffffff-no-rj-mo"
        channel="Connect Kashan" 
        verified
        subs="283K"
        noOfVideos={421}
        description="Actor, director, editor, Content writer by birth & software engineer by profession.">

        </ChannelRow>  
        </div>
        
    ) 
}

export default SearchPage
