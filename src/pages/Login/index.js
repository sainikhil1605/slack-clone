import { Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import TelegramIcon from "@material-ui/icons/Telegram";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../lib/formUtils/FormInput";
import { logInWithEmailAndPassword } from "../../utils/firebase";
import signUpStyles from "../SignUp/SignUp.styles";
const LogIn = (props) => {
  const styles = signUpStyles();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, []);
  const [submitError, setSubmitError] = useState("");
  const handleSubmit = async () => {
    const { email, password } = userDetails;
    const res = await logInWithEmailAndPassword(email, password);
    if (res === true) {
      navigate("/");
    } else {
      setSubmitError(res.message);
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
          <h1>Login into Chat App</h1>
        </div>
        <div className={styles.inputFieldsContainer}>
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
export default LogIn;
