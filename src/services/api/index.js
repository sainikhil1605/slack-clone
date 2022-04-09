import axiosInstance from "./axiosInstance";

const apiGetCall = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiPostCall = async (url, payload) => {
  try {
    const response = await axiosInstance.post(url, payload);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiDeleteCall = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiPatchCall = async (url, payload) => {
  try {
    const response = await axiosInstance.patch(url, payload);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiPutCall = async (url, payload) => {
  try {
    const response = await axiosInstance.put(url, payload);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export { apiDeleteCall, apiGetCall, apiPatchCall, apiPostCall, apiPutCall };
