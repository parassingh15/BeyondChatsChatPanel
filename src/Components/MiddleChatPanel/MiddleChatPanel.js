import React, { useState } from "react";
import "./MiddleChatPanel.css";
import commentRecieve from "../../Images/commentRecieve.png";
import commentSend from "../../Images/commentSend.png";
import downArrow from "../../Images/down-arrow.png";
import { FaRegCommentAlt } from "react-icons/fa"; // Font Awesome React Icon
// import { Link } from "react-router-dom";

function MiddleChatPanel({ selectedChat }) {
  const [closeBtn, setCloseBtn] = useState("open");

  function closeChatBtn() {
    setCloseBtn(closeBtn === "open" ? "closed" : "open");
  }
  console.log({ selectedChat }); // here it s showing null value why?
  if (!selectedChat || Object.keys(selectedChat).length === 0) {
    return (
      <div className="closedChatPane ">
        <div className="divForSpacing"></div>
        <div className="chat-starter">
          <div className="chat-icon-button">
            <FaRegCommentAlt className="chat-icon" />
          </div>
          <button
            className={
              closeBtn === "closed" ? "chat-button" : "chat-open-button"
            }
            onClick={closeChatBtn}
          >
            Tap here to access Chats
          </button>
          <p>
            See a red button? Give it a tap to start chatting! If not, just
            click the chat icon.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="middleChatPanel">
      <div className={closeBtn === "open" ? "middlePanelNav" : "hideName"}>
        <p>
          <i class="fa-solid fa-chevron-left goBackBtn"></i>
          {selectedChat.sender}
        </p>
        <div className="chatOptions">
          <div className="chatOptionsBtn">
            <p>
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div className="chatOptionsBtn">
            <p>
              <i class="fa-solid fa-moon"></i>
            </p>
          </div>
          {closeBtn === "open" && (
            <div className="closeBtn" onClick={closeChatBtn}>
              <p>
                <i class="fa-solid fa-caret-down"></i> Close
              </p>
            </div>
          )}
          {closeBtn === "closed" && (
            <div className="closeBtn" onClick={closeChatBtn}>
              <p>
                <i class="fa-solid fa-caret-up"></i> Open
              </p>
            </div>
          )}
        </div>
      </div>
      {closeBtn === "open" && (
        <div className="chatMessages">
          <div className="messageList">
            <div>
              <span className="dot">{selectedChat.sender[0]}</span>
            </div>
            <div className="messageTextRecievedBox">
              <p>{selectedChat.lastMessage}</p>
              <div className="messageRecieveTime">
                <img
                  className="commentImg"
                  src={commentRecieve}
                  alt="commentRecieve"
                />
                <p>1min</p>
              </div>
            </div>
          </div>

          <div className="messageListSent">
            <div className="messageTextSentBox">
              <p>Let me just look into this for you, Luis.</p>
              <div className="messageSentTime">
                <div>
                  <p>seen</p>
                </div>
                <div>
                  <p>1 min</p>
                </div>
              </div>
            </div>
            <div>
              <span className="dot">M</span>
            </div>
          </div>

          <div className="sendMesages">
            <div className="messageField">
              <div className="chatText">
                <img
                  src={commentSend}
                  alt="commentSend"
                  className="commentImg comentSend"
                />
                <p>Chat</p>
                <img
                  className="downArrow chatDownArrow"
                  src={downArrow}
                  alt="down-arrow"
                />
              </div>

              <textarea
                class="chat-textarea"
                placeholder="Type your message..."
              ></textarea>
              <div className="chatButtons">
                <div className="helpingButtons">
                  <i class="fa-solid fa-bolt"></i>
                  <p>|</p>
                  <i class="fa-solid fa-bookmark"></i>
                  <i class="fa-solid fa-face-smile"></i>
                </div>
                <div className="sendButton">
                  <p className="sendBtn">Send</p>
                  <p>|</p>
                  <img
                    className="downArrowtext "
                    src={downArrow}
                    alt="down-arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {closeBtn === "closed" && (
        <div className="closedChatPane">
          <div className="chat-starter">
            <div className="chat-icon-button">
              <FaRegCommentAlt className="chat-icon" />
            </div>

            <button
              className={
                closeBtn === "closed" ? "chat-button" : "chat-open-button"
              }
              onClick={closeChatBtn}
            >
              Tap here to access Chats
            </button>
            <p>
              See a red button? Give it a tap to start chatting! If not, just
              click the chat icon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiddleChatPanel;
