import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  RefreshControl,
  Animated
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import {
  selectorComicsLatest,
  selectorComicsRequestData
} from "../../reducers/comicReducer";
import { comicGetListThunk } from "../../actions/comicActions";

import Error from "../../common/Error/Error";
import ListItem from "../../common/ListItem/ListItem";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const headerStyles = {
  background: "#fff",
  opacity: 1,
  width: 100
};

const ComicList = props => {
  const comicsList = useSelector(selectorComicsLatest);
  const comicsListRequestData = useSelector(selectorComicsRequestData);
  const dispatch = useDispatch();

  const [offset] = useState(new Animated.Value(0));

  useEffect(() => {
    dispatch(comicGetListThunk());
  }, [""]);

  useEffect(() => {
    props.offsetCallback(testV);
  }, [testV]);

  const testV = offset.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  const { pending, error, success } = comicsListRequestData;

  if (error) return <Error></Error>;

  return (
    <>
      {success && comicsList.length === 0 && <Text>No comics...</Text>}

      <Animated.FlatList
        // style={[{ marginBottom: 100 }, { paddingTop: testV }]}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: offset } } }
        ])}
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
