import React from "react";
import { ChatSettingsTop } from "react-chat-engine";
import { Link } from "react-router-dom";
import { handleLogout } from "../logout/Logout";

const ChatSettings = ({ title }) => {
  return (
    <div className="chat-header">
      <div className="buttons">
        <Link to="/">Home</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ChatSettingsTop />
    </div>
  );
};

export default ChatSettings;
