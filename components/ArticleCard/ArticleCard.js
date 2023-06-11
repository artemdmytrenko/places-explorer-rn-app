import { Text, View, Image, Pressable } from "react-native";
import styles from "./ArticleCard.style";

const ArticleCard = ({ article, navigation }) => {
  {
    return (
      <Pressable
        style={styles.cardContainer}
        onPress={() => navigation.navigate("Article", { article })}
      >
        {article.urlToImage && (
          <Image style={styles.image} source={{ uri: article.urlToImage }} />
        )}
        <View style={styles.articleContainer}>
          <Text style={styles.title}>{article.title}</Text>
          {article.description && (
            <Text style={styles.description}>{article.description}</Text>
          )}
        </View>
      </Pressable>
    );
  }
};

export default ArticleCard;
