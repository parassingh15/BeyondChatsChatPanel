import React, { useState } from "react";
import "./RightAICopilotPanel.css";
import manImg from "../../Images/manImg.png";


function RightAICopilotPanel() {
  const [activeTab, setActiveTab] = useState("copilot");
  const [collapse , setCollapse] = useState("open");

  function collapseBtn(){
    setCollapse("closed");
  }

  function collapseBar(){
    setCollapse("open");
  }


  
  return (
    <div className="newDiv">
      {collapse !== "closed" && (
    <div className="rightPanel">
      {/* Top Nav */}
      <div className="rightPanelNav">
        <div className="rightPanelBtn">
          <p
            className={activeTab === "copilot" ? "active" : ""}
            onClick={() => setActiveTab("copilot")}
          >
            <i className="fa-brands fa-uikit"></i> AI Copilot
          </p>
          <p
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Details
          </p>
        </div>
        <div className="collapseDiv" onClick={collapseBtn}>
          <p>
            <i className="fa-solid fa-right-to-bracket"></i>
          </p>
        </div>
      </div>

      {/* === AI Copilot Tab === */}
      {activeTab === "copilot" && (
        <div className="copilotChatMessages">
          <div className="copilotHelloMsg">
            <i className="fa-brands fa-uikit"></i>
            <p className="helloMsg">Hi, I'm Fin AI Copilot</p>
            <p className="AskMeMsg">
              Ask me anything about this conversation.
            </p>
          </div>

          <div className="AIsendMesages">
            <div className="AImessageField">
              <textarea
                className="AI-chat-textarea"
                placeholder="Ask a question..."
              ></textarea>
              <div className="AIMsgSendButtons">
                <i className="fa-solid fa-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === Details Tab === */}
      {activeTab === "details" && (
        <div className="detailsTab">
          <div className="teamDetails">
            <div>
              <p>Assignee</p>
              <div>
                <img className="userImg" src={manImg} alt="User" />
                <p>Brian Byrne</p>
              </div>
            </div>

            <div>
              <p>Team</p>
              <div>
                <i className="fa-solid fa-users"></i>
                <p>Unassigned</p>
              </div>
            </div>
          </div>

          {/* Repeating Section */}
          {[
            "LINKS",
            "USER DATA",
            "CONVERSATION ATTRIBUTES",
            "COMPANY DETAILS",
            "SALESFORCE",
            "STRIPE",
            "JIRA FOR TICKETS",
          ].map((section, idx) => (
            <div className="links" key={idx}>
              <div className="LinkTabs">
                <p>{section}</p>
           
                <div>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              
 

            <div>
              {section === "LINKS" && (
            
                <div className="linksOptions">
                  <div>
                    <p>
                      <i className="fa-solid fa-network-wired"></i> Tracker List
                    </p>
                    <div>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>

                  <div>
                    <p>
                      <i className="fa-solid fa-clipboard-check"></i>{" "}
                      Back-Office tickets
                    </p>
                    <div>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>

                  <div>
                    <p>
                      <i className="fa-solid fa-arrow-up"></i> Side
                      conversations
                    </p>
                    <div>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
    )}
    {collapse === "closed" && (
    <div className="AICopilotCollapseBarDiv" onClick={collapseBar}>
      <div className="AICopilotLabel">
        <i className="fa-brands fa-uikit"></i>
        <span>AI Copilot</span>
      </div>
    </div>
    )}
    
    </div>
  );
}

export default RightAICopilotPanel;
