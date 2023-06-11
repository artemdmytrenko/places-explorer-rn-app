import { Text, View, Image } from "react-native";
import styles from "./PlaceCard.style";

const PlaceCard = ({
  place: {
    name,
    distance,
    categories,
    location: { formatted_address },
  },
}) => {
  const imageURI = `${categories[0].icon.prefix}32${categories[0].icon.suffix}`;

  return (
    <View style={styles.card_container}>
      <View style={styles.card_headline}>
        <View style={styles.card_h1}>
          <Image
            source={{
              uri: imageURI,
              height: 24,
              width: 24,
            }}
            style={styles.category_icon}
          />
          <Text style={styles.place_name}>{name}</Text>
        </View>
        <Text style={styles.distance}>
          {Number(distance / 1000).toFixed(1)}km
        </Text>
      </View>
      <Text style={styles.place_address}>{formatted_address}</Text>
      <Text style={styles.place_category}>{categories[0].name}</Text>
    </View>
  );
};

export default PlaceCard;
