import React, { useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import {
  selectorComicsLatest,
  selectorComicsRequestData
} from "../../reducers/comicReducer";
import { comicGetListThunk } from "../../actions/comicActions";
import { withNavigation } from "react-navigation";

import Loader from "../../common/Loader/Loader";
import Error from "../../common/Error/Error";

const ComicList = props => {
  const comicsList = useSelector(selectorComicsLatest);
  const comicsListRequestData = useSelector(selectorComicsRequestData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comicGetListThunk());
  }, [""]);

  const { navigate } = props.navigation;
  const { pending, error } = comicsListRequestData;

  if (pending) return <Loader></Loader>;
  if (error) return <Error></Error>;

  return (
    <>
      {comicsList.length === 0 && <Text>No comics...</Text>}

      <FlatList
        data={comicsList}
        keyExtractor={item => item.num.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              onPress={() => navigate("Details", { img: item.img })}
              title="Go to comic detail page"
            />
          </View>
        )}
      />
    </>
  );
};

export default withNavigation(ComicList);
