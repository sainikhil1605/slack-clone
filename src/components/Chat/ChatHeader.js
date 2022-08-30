import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { useSelector } from "react-redux";
import { Header, HeaderLeft, HeaderRight } from "./Chat.styles";
const ChatHeader = ({ name, about }) => {
  const { avatarURL } = useSelector((state) => state.auth);
  return (
    <div style={{ width: "100%" }}>
      <Header>
        <HeaderLeft>
          <h4># {name}</h4>
          <StarOutlineIcon />
        </HeaderLeft>
        <HeaderRight>
          {/* <h6>{about}</h6> */}
          <InfoOutlinedIcon /> Details
        </HeaderRight>
      </Header>
    </div>
  );
};
export default ChatHeader;
