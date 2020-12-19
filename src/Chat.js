import React, {useState , useEffect} from "react";
import {Avatar, IconButton} from "@material-ui/core";
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic";
import { MoreVert, SearchOutlined , AttachFile } from "@material-ui/icons";

function Chat() {

    const [input, setInput] = useState ("");
    const [seed , setSeed] = useState ("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You Typed >>>", input);

        setInput("");
    }

    return (
    <div className="chat">
        <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

        <div className="chat__headerinfo">
            <h3>Chat Name</h3>
            <p>Last Seen at 18:27</p>
        </div>

        <div className="chat__headerRight">
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
        </div>

        <div className="chat__body">
            <p className={`chat__message ${true && "chat__reciever"}`}>
            <span className="chat__name">Hossein</span>
            Salam Donya!
            <span className="chat__timestamp">
                04:20PM
            </span>
            </p>
        </div>

        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a Message"
                type='text'
                />
                <button onClick={sendMessage} type='submit'>Send a message</button>
            </form>
            <MicIcon />
            </div>
        </div>
        );
}

export default Chat;
