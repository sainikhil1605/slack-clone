import { makeStyles } from "@material-ui/core";

const sideBarStyles = makeStyles({
  sideBarContainer: {
    // display: "flex",
    height: "100vh",
    maxWidth: "200px",
    position: "sticky",
    textAlign: "center",
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
});

export default sideBarStyles;
