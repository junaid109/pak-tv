import React from 'react'
import Avatar from '@material-ui/core/Avatar/Avatar';
import './VideoCard.css';

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image}></img>
            <div className="videoCard__info">
            <Avatar className="videoCard__avatar" alt={channel} src={channelImage}></Avatar>
            <div className="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} * {timestamp}</p>
            </div>
            </div>
        </div>
    )
}

export default VideoCard
