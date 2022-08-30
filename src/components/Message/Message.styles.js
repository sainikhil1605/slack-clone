import styled from "styled-components";

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  > p {
    padding-left: 5px;
  }
`;
const ChatMessage = styled.div`
  margin: 5px;
`;
const MessageDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  .user-name {
    font-weight: 600;
    display: flex;
    flex-direction: row;
    .message-date {
      padding-left: 10px;
      font-weight: normal;
      color: #a6a5a5;
    }
  }
`;
export { UserDetails, ChatMessage, MessageDetails };
