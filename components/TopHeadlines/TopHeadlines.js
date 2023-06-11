import { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import Icon from "react-native-vector-icons/Entypo";
import ArticleCard from "../ArticleCard";
import styles from "./TopHeadlines.style";
import axios from "axios";
import Skeleton from "../Skeleton";

const BASE_URL = `https://newsapi.org/v2/top-headlines`;
const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];
const API_KEY = "60e3dc77afe74bf2b40cef120734db17";

const TopHeadlines = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [showToggle, setShowToggle] = useState(false);
  const [category, setCategory] = useState("business");

  useEffect(() => {
    axios
      .get(BASE_URL, {
        headers: {
          "X-Api-Key": API_KEY,
          Accept: "apllication/json",
        },
        params: {
          category: category,
          country: "us",
        },
      })
      .then(({ data }) => {
        setArticles(data.articles);
      });
  }, [category]);

  const handleButtonStylesOnPress = ({ pressed }) => {
    return pressed
      ? StyleSheet.compose(styles.toggle, styles.toggle_active)
      : styles.toggle;
  };

  const handleModalStylesOnPress = ({ pressed }) => {
    return pressed
      ? StyleSheet.compose(styles.modal_btn, styles.modal_btn_active)
      : styles.modal_btn;
  };

  const handleModalPress = (item) => {
    setCategory(item);
    setShowToggle(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.h2}>
        <Text style={styles.h2_text}>Top Headlines on</Text>
        <Pressable
          style={handleButtonStylesOnPress}
          onPress={() => setShowToggle(!showToggle)}
        >
          <Text style={styles.category_text}>{category}</Text>
          <Icon name="chevron-thin-down" size={18} color="#eef0f1" />
        </Pressable>
      </View>
      {showToggle && (
        <FlatList
          data={categories.filter((c) => c !== category)}
          style={styles.modal}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <Pressable
              style={handleModalStylesOnPress}
              onPress={() => handleModalPress(item)}
            >
              <Text style={styles.modal_btn_text}>{item}</Text>
            </Pressable>
          )}
        />
      )}
      <MasonryList
        data={articles}
        ListEmptyComponent={
          <MasonryList
            data={[1, 2, 3, 4]}
            style={styles.masonry_list_container}
            renderItem={() => {
              return <Skeleton styles={styles.skeleton} />;
            }}
          />
        }
        renderItem={({ item }) => {
          return (
            item.urlToImage && (
              <ArticleCard article={item} navigation={navigation} />
            )
          );
        }}
        style={styles.masonry_list_container}
      />
    </View>
  );
};

export default TopHeadlines;
