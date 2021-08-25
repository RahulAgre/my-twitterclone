import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';
import { textAlign } from '@material-ui/system';

function TweetBox() {
    const [tweetMessage, setTweeMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayname: 'Rahul Agre',
            username: 'raaya',
            verified: true,
            text: tweetMessage,
            avatar: "https://lh3.googleusercontent.com/ogw/ADea4I4scZvyaIHS_VXRO6dC2HRKhj-SRSdjeXHLhmo2d2g=s32-c-mo", 
            image: tweetImage
        });

        setTweeMessage("");
        setTweetImage("");
    } 

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I4scZvyaIHS_VXRO6dC2HRKhj-SRSdjeXHLhmo2d2g=s32-c-mo" />
                    <input
                        onChange={e => setTweeMessage(e.target.value)} 
                        placeholder="What's Happening" 
                        type="text" 
                    />
                </div>
                <input
                    onChange={(e => setTweetImage(e.target.value))}
                    value={tweetImage} 
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter Image URL"
                    type="text" 
                />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
