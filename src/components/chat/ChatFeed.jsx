import React from "react";
import MessageForm from "../message/MessageForm";
import TheirMessage from "../message/TheirMessage";
import MyMessage from "../message/MyMessage";

import "./chatFeed.css";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  // Find the current chat
  // If chats exist, find the chat, then the active chat
  const chat = chats && chats[activeChat];

  // Render the messages
  // keys are ids of specific messages
  const renderMessages = () => {
    // Get an array of message keys
    const keys = Object.keys(messages);

    // Map over each message and render it
    return keys.map((key, index) => {
      // Get the message based on the key
      const message = messages[key];

      // Determine if the message was sent by the user or someone else
      const isMyMessage = userName === message.sender.username;

      // If this is the first message, there is no "last message"
      // Otherwise, get the key of the last message to determine if it was sent by the same person
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const lastMessage = messages[lastMessageKey];
      const isLastMessageSameUser =
        lastMessage && lastMessage.sender.username === message.sender.username;

      // Render the message block
      return (
        <div key={`msg_${index}`}>
          <div className="message-block">
            {/* Render a message sent by the current user */}
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              // Render a message sent by someone else
              <TheirMessage
                message={message}
                lastMessage={lastMessage}
                isLastMessageSameUser={isLastMessageSameUser}
              />
            )}
          </div>
        </div>
      );
    });
  };

  // If there is no chat, render an empty div
  if (!chat) return <div />;

  // Render the chat feed
  return (
    <div>
      <div className="chat-feed">
        <div className="chat-title-container">
          <div className="chat-title">{chat?.title}</div>
          <div className="chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username}`)}
          </div>
        </div>
        {renderMessages()}
        <div />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;
