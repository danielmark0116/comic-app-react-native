import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, Text, Button } from "react-native";
import { selectorComicsLatest } from "../../reducers/comicReducer";
import { comicGetListThunk } from "../../actions/comicActions";
import { withNavigation } from "react-navigation";

const ComicList = props => {
  const comicsList = useSelector(selectorComicsLatest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comicGetListThunk());
  }, [""]);

  const { navigate } = props.navigation;

  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 30, textAlign: "center" }}>
        Comic List
      </Text>

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
