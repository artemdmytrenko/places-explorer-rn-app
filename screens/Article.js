import { useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { A } from "@expo/html-elements";

const Article = ({ navigation, route }) => {
  let article = route.params.article;

  useEffect(() => {
    navigation.setOptions({ title: article.title });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.article_container}>
          <View style={styles.article_header}>
            <Text style={styles.published_at}>
              {new Date(article.publishedAt).toDateString()}
            </Text>
            {article.author && (
              <Text style={styles.author}>{article.author}</Text>
            )}
          </View>
          <Text style={styles.p}>{article.description}</Text>
          <Text style={styles.p}>{article.content}</Text>
        </View>
        <A href={article.url} style={styles.a}>
          Read the full article
        </A>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 2,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    height: "60%",
    justifyContent: "space-between",
  },
  article_container: {
    gap: 16,
  },
  published_at: {
    fontSize: 18,
    fontWeight: 600,
  },
  article_header: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#686f8017",
    gap: 6,
  },
  author: {
    color: "#1c5677a7",
    fontWeight: 500,
  },
  p: {
    fontSize: 18,
    fontWeight: 300,
    textAlign: "justify",
  },
  a: {
    fontSize: 18,
    fontWeight: 600,
    alignSelf: "flex-end",
    marginHorizontal: 8,
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    backgroundColor: "#686f8017",
    borderColor: "#686f801a",
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default Article;
