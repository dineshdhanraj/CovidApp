import React, { useReducer } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

import Home from "./Home";
import reducer from "./Reducer";
import load from "./Load";
import styles from "./Styles";
import Main_Url from "../Config/Url";

export default function CovidApp() {
  const Loader = {
    flag: "",
    todayCases: "",
    cases: "",
    recovered: "",
    todayRecovered: "",
    tests: ""
  };
  const [state, dispatch] = useReducer(reducer, { country: "", data: Loader });
  return (
    <View style={styles.MainContent}>

      <View style={styles.MarginTop}> 
        <TextInput
          style={styles.Texter}
          testID="Country_Name"
          placeholder="Enter Country Name"
          onChangeText={(text) => dispatch({ type: "country", data: text })}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.custom}
        onPress={async () => {
          load(Main_Url(state.country), dispatch);
        }}
      >
        <Text style={styles.Button} textId="country">
          Search
        </Text>
      </TouchableOpacity>

      {state.data.cases != "" ? (
        <View>
          {state.data.cases == "Not Available" ? (
            <View style={styles.NA}>
              <Text>NO DATA AVAILABLE</Text>
            </View>
          ) : (
            <Home Covid_Details={state.data} />
          )}
        </View>
      ) : (<Text>""</Text>
        
      )}
    </View>
  );
}
