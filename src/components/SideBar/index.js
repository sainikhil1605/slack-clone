import { Avatar, Button, IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AvatarPhoto from "../../static/images/photo1.jpg";
import { getChannels } from "../../utils/firebase/channel";
import { clearAuthData } from "../../utils/store/auth/auth.reducers";
import AvatarModal from "../Avatar/index";
import ChannelList from "./ChannelList";
import DirectMessages from "./DirectMessages";
import { sideBarStyles } from "./SideBar.styles";
const SideBar = () => {
  const styles = sideBarStyles();
  const [expanded, setExpanded] = useState(false);
  const { userName } = useSelector((store) => store.auth);

  const messages = [
    {
      content: "Hello",
    },
  ];
  const { uid } = useSelector((state) => state.auth);
  const [channelList, setChanneList] = useState([]);
  const [isAvatarModalOpen, setAvatarModalOpen] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await getChannels(uid);
      setChanneList(data);
    };
    getData();
  }, [uid]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);
  const handleSignOut = () => {
    dispatch(clearAuthData());
    navigate("/login");
  };
  const { avatarURL } = useSelector((state) => state.auth);

  return (
    channelList && (
      <div className={styles.sideBarContainer}>
        <div className={styles.avatarContainer}>
          <Avatar alt="Remy Sharp" src={avatarURL || AvatarPhoto} />
          <Typography variant="subtitle1" className="avatarName">
            {userName}
          </Typography>
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMoreIcon style={{ color: "#fff" }} />
          </IconButton>
          <AvatarModal
            isAvatarModalOpen={isAvatarModalOpen}
            setAvatarModalOpen={setAvatarModalOpen}
          />
          {expanded && (
            <ul className={styles.navDropDown}>
              <li>
                <Button style={{ textTransform: "none" }}>
                  Signed in as {userName}
                </Button>
              </li>
              <li>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={() => setAvatarModalOpen(!isAvatarModalOpen)}
                >
                  Change Avatar
                </Button>
              </li>
              <li>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </li>
            </ul>
          )}
        </div>
        <div className={styles.channelListContainer}>
          <ChannelList channelList={channelList} />
          <DirectMessages messages={messages} userName={userName} />
        </div>
      </div>
    )
  );
};
export default SideBar;
