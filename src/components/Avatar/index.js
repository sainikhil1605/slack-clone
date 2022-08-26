import { uuidv4 } from "@firebase/util";
import { Button } from "@material-ui/core";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import ModalUI from "../../lib/Modal";
import { storage } from "../../utils/firebase";
import { updateImageUrl } from "../../utils/firebase/auth";
import { ChannelModal } from "../SideBar/SideBar.styles";
const Avatar = ({ isAvatarModalOpen, setAvatarModalOpen }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFileUrl(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };
  const handleClose = async () => {
    if (file) {
      const imageRef = ref(storage, `images/${file.name + uuidv4()}`);
      const data = await uploadBytes(imageRef, file);
      const {
        metadata: { name },
      } = data;
      const imgUrl = await getDownloadURL(ref(storage, `images/${name}`));
      updateImageUrl(imgUrl);
      setAvatarModalOpen(false);
    }
  };
  return (
    <ModalUI open={isAvatarModalOpen}>
      <ChannelModal>
        <div>
          <div>
            {fileUrl && (
              <img src={fileUrl} width="100%" height="100%" alt="avatar" />
            )}
            <input type="file" onChange={(e) => handleChange(e)} />
          </div>
          <Button onClick={() => handleClose()}>Submit</Button>
        </div>
      </ChannelModal>
    </ModalUI>
  );
};
export default Avatar;
