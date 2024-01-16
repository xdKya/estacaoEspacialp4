import react, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

export default class MeteorScreen extends Component {
  constructor() {
    super();
    this.state = {
      meteors: {},
    };
  }

  componentDidMount() {
    this.getMeteors();
  }

  getMeteors = () => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=aHJTmR3fTE3zAKiO5vBOV4fk8w0SL7gkufrkpRWN"
      )
      .then((dados) => {
        this.setState({
          meteors: dados.data.near_earth_objects,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    if (Object.keys(this.state.meteors).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text style={{ fontSize: 50, color: "white" }}>Carregando ...</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text style={{ fontSize: 50, color: "white" }}>
            Tela de meteoros!
          </Text>
        </View>
      );
    }
  }
}

//https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=aHJTmR3fTE3zAKiO5vBOV4fk8w0SL7gkufrkpRWN
