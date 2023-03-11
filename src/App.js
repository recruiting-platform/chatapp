import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/chat/ChatFeed";
import LoginForm from "./components/login/LoginForm";
import HomePage from "./pages/home/HomePage";

import "./App.css";

const App = () => {
  // if there is no username, render login form
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/chat"
            element={
              <div>
                <ChatEngine
                  height="100vh"
                  projectID="92743180-8511-44b3-a85b-9063f0567d87"
                  userName={localStorage.getItem("username")}
                  userSecret={localStorage.getItem("password")}
                  renderChatFeed={(chatAppProps) => (
                    <ChatFeed {...chatAppProps} />
                  )}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
