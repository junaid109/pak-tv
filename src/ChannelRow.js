import React from 'react'
import "./ChannelRow.css";
import Avatar from '@material-ui/core/Avatar/Avatar';
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow( {
    image,
    channel,
    subs,
    noOfVideos,
    description,
    verified
}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
            alt={channel} src={image}></Avatar>

            <div className="channelRow__text">
            <h4>{channel} {verified && <CheckCircleOutlineIcon></CheckCircleOutlineIcon>}</h4>
            <p>
                {subs} subscribers * {noOfVideos} videos
            </p>
            <p>
                {description}
            </p>
            </div>
        </div>
    )
}

export default ChannelRow
