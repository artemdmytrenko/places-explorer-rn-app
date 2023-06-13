import { Text, View, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./CategoriesCarousel.style";

const CategoriesCarousel = ({ navigation, location }) => {
  const handleStyleOnPress = ({ pressed }) => {
    return pressed
      ? StyleSheet.compose(styles.btn, styles.btn_active)
      : styles.btn;
  };

  const handlePress = (category, c_id) => {
    navigation.navigate("Nearby Spots", { category, c_id });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={handleStyleOnPress}
        onPress={() => handlePress("Cafes", 13032)}
      >
        <Text style={styles.p_cafes}>CAFES</Text>
        <Text style={styles.p_nearby_1}>NEARBY</Text>
        <Icon name="local-cafe" size={50} style={styles.icon} />
      </Pressable>
      <Pressable
        style={handleStyleOnPress}
        onPress={() => handlePress("Restaurants", 13065)}
      >
        <Text style={styles.p_restaurants}>RESTAURANTS</Text>
        <Text style={styles.p_nearby_2}>NEARBY</Text>
        <Icon name="restaurant" size={50} style={styles.icon} />
      </Pressable>
      <Pressable
        style={handleStyleOnPress}
        onPress={() => handlePress("Bars", 13003)}
      >
        <Text style={styles.p_bars}>BARS</Text>
        <Text style={styles.p_nearby_3}>NEARBY</Text>
        <Icon name="local-bar" size={50} style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default CategoriesCarousel;
