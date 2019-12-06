import React from "react";
import { connect } from "react-redux";

import { View, Text } from "react-native";
import { selectorComicsGetList } from "../../reducers/comicReducer";
import { comicGetList } from "../../actions/comicActions";

class ComicDetails extends React.Component {
  static navigationOptions = {
    title: "Comics Details"
  };

  componentDidMount() {
    const { getComics } = this.props;

    getComics();
  }

  render() {
    const { comics } = this.props;

    return (
      <View>
        <Text>Comic details</Text>
        <Text>{this.props.navigation.getParam("tests", "no value")}</Text>
        {comics.map((comic, index) => (
          <Text key={index}>{comic}</Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  comics: selectorComicsGetList(state)
});

const mapDispatchToProps = dispatch => ({
  getComics: () => dispatch(comicGetList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetails);
