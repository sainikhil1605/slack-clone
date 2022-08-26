import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import store from "../store";
import {
  setAuthData,
  setImageURL,
  setLoginDetails,
} from "../store/auth/auth.reducers";
import { auth, db } from "./init";

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const { user } = res;
    store.dispatch(setLoginDetails(user));
    getUserDetails(user.uid);
    return true;
  } catch (err) {
    console.error(err);
    alert(err.message);
    return err.message;
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    return true;
  } catch (err) {
    console.error(err);
    console.log(err.message);
    return err.message;
  }
};
const getUserDetails = async (uid) => {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const dataSnapShot = await getDocs(q);
  dataSnapShot.forEach((data) => {
    const { email, name, avatarURL } = data.data();
    store.dispatch(setAuthData(email, name, avatarURL));
  });
};
const updateImageUrl = async (url) => {
  const {
    auth: { uid },
  } = store.getState();
  // console.log(data);
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const dataSnapShot = await getDocs(q);
  dataSnapShot.forEach((data) => {
    const docRef = doc(db, "users", data.id);
    updateDoc(docRef, {
      avatarURL: url,
    });
  });
  store.dispatch(setImageURL(url));
};
export {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  getUserDetails,
  updateImageUrl,
};
