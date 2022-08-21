import { Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import RefreshIcon from "@material-ui/icons/Refresh";
import TelegramIcon from "@material-ui/icons/Telegram";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../lib/formUtils/FormInput";
import { registerWithEmailAndPassword } from "../../utils/store/firebase/firebase";
import signUpStyles from "./SignUp.styles";
const SignUp = (props) => {
  const styles = signUpStyles();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigation = useNavigate();
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitError, setSubmitError] = useState("");
  const handleSubmit = async () => {
    const { username, email, password } = userDetails;
    const res = await registerWithEmailAndPassword(username, email, password);
    if (res === true) {
      navigation.navigate("/");
    } else {
      setSubmitError("User Already Exists");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      if (!/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/.test(value)) {
        setErrors({ ...errors, email: "Enter valid email" });
      } else {
        setErrors({ ...errors, email: "" });
      }
      setUserDetails({ ...userDetails, email: value });
    } else if (name === "confirmPassword") {
      if (userDetails.password !== value) {
        setErrors({ ...errors, confirmPassword: "Passwords dont match" });
      } else {
        setErrors({ ...errors, confirmPassword: "" });
      }
      setUserDetails({ ...userDetails, confirmPassword: value });
    } else if (name === "password") {
      if (userDetails.password.length < 6) {
        setErrors({
          ...errors,
          password: "Password should be atleast 6 characters long",
        });
      } else {
        setErrors({ ...errors, password: "" });
      }
      setUserDetails({ ...userDetails, password: value });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };
  const checkBtnState = () => {
    return Object.values(errors).reduce((acc, curr) => {
      return acc || curr !== "";
    }, false);
  };

  return (
    <div className={styles.signUpOuterContainer}>
      <div className={styles.signUpInnerContainer}>
        <div className={styles.header}>
          <TelegramIcon style={{ width: "100px", height: "100px" }} />
          <h1>Register for Chat App</h1>
        </div>
        <div className={styles.inputFieldsContainer}>
          <div className={styles.inputField}>
            <FormInput
              placeholder="Username"
              variant="outlined"
              InputProps={{
                startAdornment: <PersonOutlineIcon />,
              }}
              name="username"
              onChange={handleChange}
              value={userDetails.username}
              error={errors?.username}
            />
          </div>
          <div className={styles.inputField}>
            <FormInput
              placeholder="Email Address"
              variant="outlined"
              InputProps={{
                startAdornment: <MailIcon />,
              }}
              name="email"
              onChange={handleChange}
              value={userDetails.email}
              error={errors?.email}
              helperText={errors?.email}
              required
            />
          </div>
          <div className={styles.inputField}>
            <FormInput
              placeholder="Password"
              variant="outlined"
              InputProps={{
                startAdornment: <LockIcon />,
              }}
              type="password"
              name="password"
              onChange={handleChange}
              value={userDetails.password}
              error={errors?.password}
            />
          </div>
          <div className={styles.inputField}>
            <FormInput
              placeholder="Re-Enter Passwore"
              variant="outlined"
              InputProps={{
                startAdornment: <RefreshIcon />,
              }}
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={userDetails.confirmPassword}
              error={errors?.confirmPassword}
              helperText={errors?.confirmPassword}
            />
          </div>
          <div className={styles.inputField}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={styles.submitBtn}
              disabled={checkBtnState()}
            >
              Submit
            </Button>
            <p style={{ textAlign: "center" }}>{submitError}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
