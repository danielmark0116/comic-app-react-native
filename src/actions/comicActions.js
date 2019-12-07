import * as types from "./actionTypes";
import axios from "axios";

export const comicGetLatest = payload => ({
  type: types.COMIC_GET_LATEST,
  payload
});

export const comicGetListPenging = (payload = "") => ({
  type: types.COMIC_GET_LATEST_PENDING,
  payload
});

export const comicGetListSuccess = (payload = "") => ({
  type: types.COMIC_GET_LATEST_SUCCESS,
  payload
});

export const comicGetListFail = (payload = "") => ({
  type: types.COMIC_GET_LATEST_FAIL,
  payload
});

// THUNKS
export const comicGetListThunk = () => {
  return async dispatch => {
    dispatch(comicGetListPenging("Fetching latest comics"));

    try {
      let latestComicResponse = await axios.get("https://xkcd.com/info.0.json");

      let latestComic = latestComicResponse.data;

      const requestLinks = [...Array(7)].map((item, index) =>
        axios.get(
          `https://xkcd.com/${latestComic.num - (index + 1)}/info.0.json`
        )
      );

      let remainingComicsResp = await axios.all(requestLinks);

      const comicList = [latestComic, ...remainingComicsResp.map(x => x.data)];

      await new Promise((res, rej) => setTimeout(res, 1000));

      dispatch(comicGetLatest(comicList));
      dispatch(comicGetListSuccess("Successfully fetched latest comics"));
    } catch (e) {
      dispatch(comicGetListFail(e.message));
    }
  };
};
