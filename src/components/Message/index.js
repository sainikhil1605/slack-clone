import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { ChatMessage, MessageDetails, UserDetails } from "./Message.styles";

const Message = ({ message, avatarURL, time = new Date().getDate() }) => {
  const { userName } = useSelector((state) => state.auth);
  return (
    <ChatMessage>
      <UserDetails>
        <Avatar variant="rounded" src={avatarURL} />
        <MessageDetails>
          <div className="user-name">
            <div>{userName}</div>
            <div className="message-date">{time}</div>
          </div>
          <div>{message}</div>
        </MessageDetails>
      </UserDetails>
    </ChatMessage>
  );
};
export default Message;
