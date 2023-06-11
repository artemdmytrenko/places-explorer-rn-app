import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  SectionList,
} from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import SearchBar from "../components/SearchBar";
import TopHeadlines from "../components/TopHeadlines";
import CategoriesCarousel from "../components/CategoriesCarousel";

const Home = ({ navigation }) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log(currentLocation);
    };
    getPermissions();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Test Task</Text>
        <SearchBar navigation={navigation} />
        <CategoriesCarousel navigation={navigation} location={location} />
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
