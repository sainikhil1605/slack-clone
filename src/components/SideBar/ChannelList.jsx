import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { useState } from "react";
import AddChannel from "../Channel/AddChannel";
const ChannelList = (props) => {
  const { channelList } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div class="channelHeader">
        <div class="channel-icon-container">
          <SwapHorizIcon />
          <h1>Channels</h1>
        </div>

        <div>
          <div
            className="add-icon"
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: "pointer" }}
          >
            +
          </div>
        </div>
        <AddChannel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      <div className="channel-list">
        {channelList.map((channel) => {
          const { name } = channel;
          return (
            <div className="channel-list-item" key={name}>
              # {name}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ChannelList;
