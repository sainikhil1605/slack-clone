import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { useState } from "react";
import FormInput from "../../lib/formUtils/FormInput";
import ModalUI from "../../lib/Modal";
import { addChannel } from "../../utils/firebase/channel";
import { ChannelModal } from "../SideBar/SideBar.styles";

const AddChannel = ({ isModalOpen, setIsModalOpen }) => {
  const [chnlAddDetails, setChlAddDetails] = useState({
    channelName: "",
    channelAbout: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChlAddDetails({ ...chnlAddDetails, [name]: value });
  };
  const handleChannelAdd = () => {
    addChannel(chnlAddDetails);
    setIsModalOpen(false);
  };
  return (
    <ModalUI
      open={isModalOpen}
      handleClose={() => {
        setChlAddDetails({ channelName: "", channelAbout: "" });
      }}
    >
      <ChannelModal>
        <div className="channel-modal-header">Add a Channel</div>
        <div className="channel-body">
          <div>
            <FormInput
              type="text"
              name="channelName"
              placeholder="Name of Channel"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              type="text"
              name="channelAbout"
              placeholder="About the Channel"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button startIcon={<CheckIcon />} onClick={handleChannelAdd}>
              Add
            </Button>
            <Button
              startIcon={<ClearIcon />}
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </ChannelModal>
    </ModalUI>
  );
};
export default AddChannel;
