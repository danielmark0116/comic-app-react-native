import React, { useEffect } from "react";
import { View, Text, Button, FlatList, RefreshControl } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import {
  selectorComicsLatest,
  selectorComicsRequestData
} from "../../reducers/comicReducer";
import { comicGetListThunk } from "../../actions/comicActions";
import { withNavigation } from "react-navigation";

import Error from "../../common/Error/Error";
import { ScrollView } from "react-native-gesture-handler";

const ComicList = props => {
  const comicsList = useSelector(selectorComicsLatest);
  const comicsListRequestData = useSelector(selectorComicsRequestData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comicGetListThunk());
  }, [""]);

  const { navigate } = props.navigation;
  const { pending, error, success } = comicsListRequestData;

  if (error) return <Error></Error>;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={pending}
          onRefresh={() => dispatch(comicGetListThunk())}
        />
      }
    >
      {success && comicsList.length === 0 && <Text>No comics...</Text>}

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
    </ScrollView>
  );
};

export default withNavigation(ComicList);
