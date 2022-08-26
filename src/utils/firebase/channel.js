import { addDoc, collection, getDocs, where } from "firebase/firestore";
import { db } from "./init";

const addChannel = async ({ channelName, channelAbout }) => {
  const uid = localStorage.getItem("userId");
  try {
    await addDoc(collection(db, "channels"), {
      createdBy: uid,
      name: channelName,
      about: channelAbout,
      members: [uid],
    });
  } catch (err) {
    console.log(err);
  }
};
const getChannels = async (uid) => {
  const dbSnapShot = await getDocs(
    collection(db, "channels"),
    where("members", "array-contains", uid)
  );
  let channels = [];
  dbSnapShot.forEach((data) => {
    channels.push(data.data());
  });
  return channels;
};

export { addChannel, getChannels };
