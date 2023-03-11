import "./message.css";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div
      className="message"
      style={{
        float: "left",
        marginLeft: isFirstMessageByUser ? "4px" : "48px",
      }}
    >
      {message.text}
    </div>
  );
};

export default TheirMessage;
