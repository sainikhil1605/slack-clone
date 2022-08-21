import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
const ChannelList = (props) => {
  const { channelList } = props;
  return (
    <>
      <div class="channelHeader">
        <div class="channel-icon-container">
          <SwapHorizIcon />
          <h1>Channels</h1>
        </div>

        <div>
          <div className="add-icon">+</div>
        </div>
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
