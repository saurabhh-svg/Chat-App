import React from "react";
import {ChatBubbleLeftRightIcon, PhoneIcon} from "@heroicons/react/20/solid";


// @ts-ignore
const customHeader = ({chat})=>{
    console.log(chat);
    return (
        <div className="chat-header">
            <div className="flex-between">
            <ChatBubbleLeftRightIcon className="icon-chat"/>
                <h3 className="header-text">{chat.title}</h3>
            </div>
            <div className="flex-between">
                <PhoneIcon className="icon-phone"/>
                <p className="header-text">{chat.description}</p>
            </div>
        </div>
    )
}

export default customHeader;