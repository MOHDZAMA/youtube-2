import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const TOKEN = import.meta.env.VITE_APP_YOUTUBE_TOKEN;

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: {
        "X-RapidAPI-Key": TOKEN,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
