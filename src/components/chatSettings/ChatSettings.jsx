import React from "react";
import { ChatSettingsTop, OptionsSettings } from "react-chat-engine";
import { Link } from "react-router-dom";
import { handleLogout } from "../logout/Logout";

import "./chatsettings.css";

const ChatSettings = ({ title }) => {
  return (
    <div className="chat-header">
      <div className="settings-buttons">
        <Link to="/">Home</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ChatSettingsTop />
      <OptionsSettings />
    </div>
  );
};

export default ChatSettings;
