import "./message.css";

// render a div element with the message text
const MyMessage = ({ message }) => {
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
