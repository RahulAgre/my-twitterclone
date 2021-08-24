import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayname, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I4scZvyaIHS_VXRO6dC2HRKhj-SRSdjeXHLhmo2d2g=s32-c-mo"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Rahul Agre{" "}
                             <span className="post__headerSpecial">
                                <CheckCircleIcon className="post__badge" />@raaya
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Twitter UI clone challenge !!!!</p>
                    </div>
                </div>
                <img src="https://media0.giphy.com/media/26AHyxxCItIbFijLO/giphy.gif?cid=ecf05e47snfpexainthoovmgaqltqu2n8g41t6cm4415j92c&rid=giphy.gif&ct=g" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontsize="small"/>
                    <FavoriteBorderIcon fontsize="small"/>
                    <PublishIcon fontsize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post;
