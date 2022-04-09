import { Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import RefreshIcon from "@material-ui/icons/Refresh";
import TelegramIcon from "@material-ui/icons/Telegram";
import FormInput from "../../lib/formUtils/FormInput";
import signUpStyles from "./SignUp.styles";
const SignUp = (props) => {
  const styles = signUpStyles();
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
            />
          </div>
          <div className={styles.inputField}>
            <FormInput
              placeholder="Email Address"
              variant="outlined"
              InputProps={{
                startAdornment: <MailIcon />,
              }}
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
            />
          </div>
          <div className={styles.inputField}>
            <Button
              variant="contained"
              color="primary"
              className={styles.submitBtn}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
