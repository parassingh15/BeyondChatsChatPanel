import React, { useEffect, useState } from "react";
import "./LandingPage.css";

import LeftSideBarPanel from "../../Components/LeftSideBarPanel/LeftSideBarPanel";
import MiddleChatPanel from "../../Components/MiddleChatPanel/MiddleChatPanel";
import RightAICopilotPanel from "../../Components/RightAICopilotPanel/RightAICopilotPanel";
import axios from "axios";

function LandingPage() {
  const [chatData, setChatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        setChatData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="LandingPage row">
      {/* Left Panel */}

      <div className="LeftSideBarPanel col-auto">
        <LeftSideBarPanel
          chatData={chatData}
          loading={loading}
          onSelectChat={setSelectedChat}
          selectedChatId={selectedChat?.id}
        />
      </div>

      {/* Middle Panel */}

      <div className="MiddleChatPanel col-auto">
        <MiddleChatPanel selectedChat={selectedChat} />
      </div>

      {/* Right Panel */}

      <div className="RightAICopilotPanel col-auto">
        <RightAICopilotPanel />
      </div>
    </div>
  );
}

export default LandingPage;
