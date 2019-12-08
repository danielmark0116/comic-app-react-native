import React from "react";

import ComicList from "../../features/ComicList/ComicList";
import AboutBtn from "../../features/AboutBtn/AboutBtn";

const ComicListScreen = () => <ComicList />;

ComicListScreen.navigationOptions = {
  headerRight: <AboutBtn></AboutBtn>
};

export default ComicListScreen;
