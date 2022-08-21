import { Avatar, IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import AvatarPhoto from "../../static/images/photo1.jpg";
import ChannelList from "./ChannelList";
import DirectMessages from "./DirectMessages";
import sideBarStyles from "./SideBar.styles";
const SideBar = () => {
  const styles = sideBarStyles();
  const [expanded, setExpanded] = useState(false);
  const channelList = [
    {
      name: "general",
    },
    {
      name: "random",
    },
  ];
  const userName = "Nikhil";
  const messages = [
    {
      content: "Hello",
    },
  ];
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.avatarContainer}>
        <Avatar alt="Remy Sharp" src={AvatarPhoto} />
        <Typography variant="subtitle1" className="avatarName">
          Avatar Name
        </Typography>
        <IconButton onClick={() => setExpanded(!expanded)}>
          <ExpandMoreIcon style={{ color: "#fff" }} />
        </IconButton>
        {expanded && (
          <ul className={styles.navDropDown}>
            <li>Signed in as Remy Sharp</li>
            <li>Change Avatar</li>
            <li>Sign Out</li>
          </ul>
        )}
      </div>
      <div className={styles.channelListContainer}>
        <ChannelList channelList={channelList} />
        <DirectMessages messages={messages} userName={userName} />
      </div>
    </div>
  );
};
export default SideBar;
