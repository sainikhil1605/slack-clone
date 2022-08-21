import MailIcon from "@material-ui/icons/Mail";
const DirectMessages = ({ messages, userName }) => {
  return (
    <div className="directMessageContainer">
      <div className="dmHeader">
        <MailIcon style={{ paddingRight: "5px" }} />
        <h1>Direct Messages</h1>
      </div>
      <div className="directMessages">
        <p>DM1</p>
        <p>DM2</p>
      </div>
    </div>
  );
};

export default DirectMessages;
