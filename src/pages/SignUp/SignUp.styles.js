import { makeStyles } from "@material-ui/core";

const signUpStyles = makeStyles({
  signUpOuterContainer: {
    display: "flex",
    height: "100vh",
  },
  signUpInnerContainer: {
    display: "flex",
    maxWidth: "500px",
    margin: "auto",
    flexDirection: "column",
  },
  inputFieldsContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    padding: "20px",
    paddingTop: "10px",
  },
  inputField: {
    marginTop: "10px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  header: {
    display: "flex",
  },
  submitBtn: {
    color: "#fff",
    backgroundColor: "#111",
    "&:hover": {
      backgroundColor: "#222",
    },
    width: "100%",
  },
});

export default signUpStyles;
