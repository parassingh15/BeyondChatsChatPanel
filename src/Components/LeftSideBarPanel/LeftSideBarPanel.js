import React from "react";
import "./LeftSideBarPanel.css";
import downArrow from "../../Images/down-arrow.png";

function LeftSideBarPanel({ chatData, loading, onSelectChat, selectedChatId }) {



  return (
    <div className="LeftBarPanel">
      <div className="leftPanelNav">
        <p>Your inbox</p>
      </div>

      <div className="leftPanelDetail">
        <div className="leftPanelOptions">
          <div>
            <p>{chatData.conversations.length} Open</p>
            <img className="downArrow" src={downArrow} alt="down-arrow" />
          </div>
          <div>
            <p>Waiting Longest</p>
            <img className="downArrow" src={downArrow} alt="down-arrow" />
          </div>
        </div>
      </div>
      <div className="messages">
        {chatData.conversations.map((idx) => (
         
         <div 
            className="messageList inboxMsgList"
            key={idx.id}
            onClick={() => {
              console.log("Clicked:", idx); 
              onSelectChat(idx);
            }}
          >
        
            <div>
              <span className="dot">{idx.sender[0]}</span>
            </div>
            <div className="messageText">
              <p>
                {idx.sender} • {idx.company}
              </p>
              <p className="message">
                {idx.lastMessage.length > 20
                  ? idx.lastMessage.slice(0, 20) + "..."
                  : idx.lastMessage}
              </p>
            </div>
            <div>
              <p className="messageTime">{idx.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSideBarPanel;
