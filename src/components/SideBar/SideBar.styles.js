import { makeStyles } from "@material-ui/core";

const sideBarStyles = makeStyles({
  sideBarContainer: {
    // display: "flex",
    height: "100vh",
    maxWidth: "200px",
    position: "sticky",
    textAlign: "center",
    padding: "10px",
    top: 0,
    backgroundColor: "#611f69",
    color: "white",
  },
  avatarContainer: {
    marginTop: "10px",
    display: "flex",
    margin: "auto",

    justifyContent: "center",
    alignItems: "center",
    "& .avatarName": {
      marginLeft: "10px",
      fontSize: "15px",
    },
  },
  navDropDown: {
    listStyle: "none",
    fontSize: "10px",
    position: "absolute",
    top: "60px",
    backgroundColor: "white",
    color: "black",
    padding: "5px",
    textAlign: "left",
  },
  channelListContainer: {
    "& .channelHeader": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingTop: "10px",
      alignItems: "center",
      "& .add-icon": {
        alignSelf: "flex-end",
      },
      "& .MuiIconButton-root": {
        padding: "0px",
      },
      "& .channel-icon-container": {
        display: "flex",

        "& >h1": {
          fontSize: "15px",
          margin: "0px",
        },
      },
    },
    "& .channel-list": {
      textAlign: "left",
    },
    "& .dmHeader": {
      "& >h1": {
        fontSize: "15px",
        margin: "0px",
      },
      display: "flex",
    },
    "& .directMessageContainer": {
      marginTop: "10px",
    },
    "& .directMessages": {
      "& >p": {
        textAlign: "left",
      },
    },
  },
});

export default sideBarStyles;
