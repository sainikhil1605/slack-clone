import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./init";

const addChannel = async ({ channelName, channelAbout }) => {
  const uid = localStorage.getItem("userId");
  try {
    await addDoc(collection(db, "channels"), {
      createdBy: uid,
      name: channelName,
      about: channelAbout,
      authProvider: "local",
    });
  } catch (err) {
    console.log(err);
  }
};
const getChannels = async () => {
  const dbSnapShot = await getDocs(collection(db, "channels"));
  dbSnapShot.forEach((data) => {});
};

export { addChannel, getChannels };
