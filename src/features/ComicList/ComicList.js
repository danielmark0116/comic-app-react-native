import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, Text, Button } from "react-native";
import {
  selectorComicsLatest,
  selectorComicsRequestData
} from "../../reducers/comicReducer";
import { comicGetListThunk } from "../../actions/comicActions";
import { withNavigation } from "react-navigation";
import Loader from "../../common/Loader/Loader";

const ComicList = props => {
  const comicsList = useSelector(selectorComicsLatest);
  const comicsListRequestData = useSelector(selectorComicsRequestData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comicGetListThunk());
  }, [""]);

  const { navigate } = props.navigation;
  const { pending } = comicsListRequestData;

  if (pending) return <Loader></Loader>;

  return (
    <View>
      {comicsList.length === 0 && <Text>No comics...</Text>}

      {comicsList.map((item, index) => (
        <View key={index}>
          <Text>{item.title}</Text>
          <Button
            onPress={() => navigate("Details", { img: item.img })}
            title="Go to comic detail page"
          />
        </View>
      ))}
    </View>
  );
};

export default withNavigation(ComicList);
