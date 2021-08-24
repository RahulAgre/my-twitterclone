import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I4scZvyaIHS_VXRO6dC2HRKhj-SRSdjeXHLhmo2d2g=s32-c-mo" />
                    <input placeholder="What's Happening" type="text" />
                </div>
                <input className="tweetBox__imageInput" 
                       placeholder="Optional: Enter Image URL"
                       type="text" 
                />

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
