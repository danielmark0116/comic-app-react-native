import React, { useEffect } from "react";
import { Text, RefreshControl, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import {
  selectorComicsLatest,
  selectorComicsRequestData
} from "../../reducers/comicReducer";
import { comicGetListThunk } from "../../actions/comicActions";

import Error from "../../common/Error/Error";
import ListItem from "../../common/ListItem/ListItem";

const ComicList = () => {
  const comicsList = useSelector(selectorComicsLatest);
  const comicsListRequestData = useSelector(selectorComicsRequestData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comicGetListThunk());
  }, [""]);

  const { pending, error, success } = comicsListRequestData;

  if (error)
    return <Error action={() => dispatch(comicGetListThunk())}></Error>;

  return (
    <>
      {success && comicsList.length === 0 && <Text>No comics...</Text>}

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={pending}
            onRefresh={() => dispatch(comicGetListThunk())}
          />
        }
        data={comicsList}
        keyExtractor={item => item.num.toString()}
        renderItem={({ item, index }) => (
          <ListItem index={index} comicData={item} />
        )}
      />
    </>
  );
};

export default ComicList;
