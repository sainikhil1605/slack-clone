import { Button } from "@material-ui/core";
import { useState } from "react";
import FormInput from "../../lib/formUtils/FormInput";
import { ChatInputContainer } from "./Chat.styles";

const ChatInput = ({ channelName, channelId }) => {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
  };
  return (
    <ChatInputContainer>
      <form>
        <FormInput
          placeholder="Enter something here"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
