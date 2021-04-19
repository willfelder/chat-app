import React, {useState, useEffect} from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000 ));
    }, []);


    return (
        <div className="chat">

            <div className="chat_header">
               <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                   <IconButton>
                        <DonutLargeIcon />
                   </IconButton>
                   <IconButton>
                        <ChatIcon />
                   </IconButton>
                   <IconButton>
                       <MoreVertIcon />
                   </IconButton>
                </div>

            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className="chat_name">William</span>
                    Hey guys
                    <span className="chat_timestamp">3:52pm</span>
                </p>
            </div>

            <div className="chat_footer">
               <InsertEmoticonIcon />
               <form>
                   <input type="text" />
                   <button>Send a Message</button>
               </form>
               <MicIcon />
            </div>
        </div>
    )
}

export default Chat