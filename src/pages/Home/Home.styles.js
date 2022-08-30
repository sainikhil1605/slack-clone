import { makeStyles } from "@material-ui/core";

const homeStyles = makeStyles({
  homeContainer: {
    "& .add-channel-modal": {
      backgroundColor: "white",
      maxWidth: "700px",
      margin: "auto",
      position: "relative",
      top: "50%",
    },
    display: "flex",
  },
});
export { homeStyles };
