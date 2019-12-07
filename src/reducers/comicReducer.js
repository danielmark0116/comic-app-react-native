import * as types from "../actions/actionTypes";

export const selectorComicsLatest = state => state.comics.comics;
export const selectorComicsRequestData = state =>
  state.comics.comicsRequestData;

const initState = {
  comics: [],
  comicsRequestData: {
    pending: false,
    success: false,
    error: false,
    msg: ""
  }
};

export function comicReducer(state = initState, action) {
  switch (action.type) {
    case types.COMIC_GET_LATEST:
      return { ...state, comics: action.payload.sort((a, b) => b.num - a.num) };
    case types.COMIC_GET_LATEST_PENDING:
      return {
        ...state,
        comicsRequestData: {
          pending: true,
          success: false,
          error: false,
          msg: action.payload
        }
      };
    case types.COMIC_GET_LATEST_SUCCESS:
      return {
        ...state,
        comicsRequestData: {
          pending: false,
          success: true,
          error: false,
          msg: action.payload
        }
      };
    case types.COMIC_GET_LATEST_FAIL:
      return {
        ...state,
        comicsRequestData: {
          pending: false,
          success: false,
          error: true,
          msg: action.payload
        }
      };
    default:
      return { ...state };
  }
}
