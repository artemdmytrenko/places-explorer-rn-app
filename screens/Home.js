import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import TopHeadlines from "../components/TopHeadlines";
import CategoriesCarousel from "../components/CategoriesCarousel";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Test Task</Text>
        <SearchBar navigation={navigation} />
        <CategoriesCarousel navigation={navigation} />
        <TopHeadlines navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    marginHorizontal: 16,
    marginVertical: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "500",
  },
});

export default Home;
