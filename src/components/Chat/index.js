import Message from "../Message";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ChatHeader name="Let's Play" about="description" />
      <Message message="hello" avatarURL />
      <Message message="hi" />
      <Message message="What are you doing" />
      <Message message="nothing" />
      <Message message="ok" />

      <ChatInput />
    </div>
  );
};
export default Chat;
