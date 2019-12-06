import * as types from "../actions/actionTypes";

export const selectorComicsGetList = state => state.comics.comics;

const initState = {
  comics: []
};

export function comicReducer(state = initState, action) {
  switch (action.type) {
    case types.TEST:
      return { ...state, comics: [1, 2, 3, 4, 5, 6, 7, 8] };
    default:
      return { ...state };
  }
}
