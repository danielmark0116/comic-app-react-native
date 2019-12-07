import React, { useState, useEffect } from "react";

import ComicList from "../../features/ComicList/ComicList";
import Header from "../../common/Header/Header";

const ComicListScreen = () => {
  const [offset, setOffset] = useState(0);

  return (
    <>
      {/* <Header offset={offset}></Header> */}
      <ComicList offsetCallback={setOffset} />
    </>
  );
};

export default ComicListScreen;
