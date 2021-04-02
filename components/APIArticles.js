import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";
import { Card } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CardArticles() {
  const { key } = require("../assets/config_API.json");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://newsapi.org/v2/top-headlines?country=ph&apiKey=${key}`)
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //save article
  const savedArticles = async () => {
    try {
      const articles = await AsyncStorage.getItem("savedArticles");
      const parsed = JSON.parse(articles);
      const obj = [
        {
          title: "Hello",
          content: "World",
        },
      ];
      parsed.splice(0, 0, obj);
      await AsyncStorage.setItem("savedArticles", JSON.stringify(obj));
      // await AsyncStorage.setItem("name", myStr);
    } catch (e) {
      console.log(e);
    }

    console.log("Storing Done.");
  };

  // // go to the website
  // const gotoWebsite = () => {
  //     return (
  //         <SafeAreaView>
  //             <WebView source={{ uri: data.url }} />
  //         </SafeAreaView>
  //     );
  // };

  // function Webview({ navigation, route }) {
  //   return <WebView source={{ uri: route.params.url }} />;
  // }

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        data.map((news, key) => {
          return (
            <Card key={key}>
              <Card.Title>{news.title}</Card.Title>
              <Card.Divider />
              <Card.Image source={{ uri: news.urlToImage }}></Card.Image>
              <View>
                <Text> {news.description}</Text>
                <Button
                  title="Go to the website"
                  // gotoWebsite(news.url)
                  onPress={gotoWebsite}
                  color="#435F71"
                />
                <Button
                  title="Save article"
                  onPress={savedArticles}
                  color="#435F71"
                />
              </View>
            </Card>
          );
        })
      )}
    </View>
  );
}
