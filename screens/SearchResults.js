import { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import ArticleCard from "../components/ArticleCard";
import axios from "axios";
import Skeleton from "../components/Skeleton";

import { NEWS_API_URL, NEWS_API_KEY } from "@env";

const SearchResults = ({ navigation, route }) => {
  const [articles, setArticles] = useState([]);
  const { searchQuery, filters } = { ...route.params };

  useEffect(() => {
    axios
      .get(`${NEWS_API_URL}everything`, {
        headers: {
          "X-Api-Key": NEWS_API_KEY,
        },
        params: {
          q: searchQuery,
          from: filters.from.touched
            ? new Date(filters.from.value).toISOString()
            : null,
          to: filters.to.touched
            ? new Date(filters.to.value).toISOString()
            : null,
          sortBy: filters.sortBy.touched && filters.sortBy.value,
        },
      })
      .then(({ data }) => {
        if (data.status === "ok") {
          data.totalResults > 0
            ? setArticles((cur) => [...cur, ...data.articles])
            : navigation.navigate("Error", {
                msg: "No articles found for this search query.",
              });
        }
      })
      .catch(({ response }) =>
        navigation.navigate("Error", { msg: response.data.message })
      );
  }, []);

  return (
    <View style={{ padding: 16, backgroundColor: "#c1cce490" }}>
      <FlatList
        data={articles}
        ListEmptyComponent={
          <View style={{ gap: 20, minHeight: "100%" }}>
            <Skeleton styles={styles.skeleton}>
              <Skeleton styles={styles.skeleton_image} />
            </Skeleton>
            <Skeleton styles={styles.skeleton}>
              <Skeleton styles={styles.skeleton_image} />
            </Skeleton>
            <Skeleton styles={styles.skeleton}>
              <Skeleton styles={styles.skeleton_image} />
            </Skeleton>
          </View>
        }
        renderItem={({ item }) => {
          return <ArticleCard article={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  error_container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  error_message: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 400,
  },
  skeleton: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#eef0f1",
    height: 250,
  },
  skeleton_image: { height: 125, backgroundColor: "#51515334", zIndex: 2 },
});

export default SearchResults;
