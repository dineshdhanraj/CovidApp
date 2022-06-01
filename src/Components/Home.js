import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from "./Styles";

export default function Home({ Covid_Details }) 
{
    return (
      <View>

        <Image style={styles.image} source={{ uri: Covid_Details.flag }} />

        <View style={styles.seperator}>
          <Text style={styles.Heading} testID='Cases'>Cases</Text>
          <Text style={styles.textstyle}>{Covid_Details.cases}</Text>
        </View>

        <View style={styles.seperator}>
          <Text style={styles.Heading} testId='Today Cases'>Today Cases</Text>
          <Text style={styles.textstyle}>{Covid_Details.todayCases}</Text>
        </View>

        <View style={styles.seperator}>
          <Text style={styles.Heading} testID='Recovered'>Recovered</Text>
          <Text style={styles.textstyle}>{Covid_Details.recovered}</Text>
        </View>

        <View style={styles.seperator}>
          <Text style={styles.Heading} testId='Today Recovered'>Today Recovered</Text>
          <Text style={styles.textstyle}>{Covid_Details.todayRecovered}</Text>
        </View>

        <View style={styles.seperator}>
          <Text style={styles.Heading} testID='Tests'>Tests</Text>
          <Text style={styles.textstyle}>{Covid_Details.tests}</Text>
        </View>

      </View>
    );
  
  
}
