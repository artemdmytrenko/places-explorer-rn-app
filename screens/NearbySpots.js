import { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Animated,
} from "react-native";
import PlaceCard from "../components/PlaceCard";
import Skeleton from "../components/Skeleton";
import axios from "axios";

import { PLACES_API_URL, PLACES_API_KEY } from "@env";

const NearbySpots = ({ route }) => {
  const [places, setPlaces] = useState([]);

  const {
    category,
    c_id,
    location: {
      coords: { latitude, longitude },
    },
  } = { ...route.params };

  useEffect(() => {
    axios
      .get(PLACES_API_URL, {
        headers: {
          Authorization: PLACES_API_KEY,
          Accept: "application/json",
        },
        params: {
          ll: `${latitude},${longitude}`,
          categories: c_id,
          fields: "name,categories,location,distance",
          limit: 50,
        },
      })
      .then(({ data }) => {
        console.log(data), setPlaces((cur) => [...cur, ...data.results]);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        l
        data={places.sort((a, b) => {
          if (a.distance < b.distance) return -1;
          else if (a.distance > b.distance) return 1;
        })}
        ListHeaderComponent={
          <Text style={styles.header}>{category} near you</Text>
        }
        ListEmptyComponent={
          <View style={{ gap: 20 }}>
            <Skeleton styles={styles.skeleton} />
            <Skeleton styles={styles.skeleton} />
            <Skeleton styles={styles.skeleton} />
            <Skeleton styles={styles.skeleton} />
            <Skeleton styles={styles.skeleton} />
            <Skeleton styles={styles.skeleton} />
          </View>
        }
        ItemSeparatorComponent={<View style={styles.separator}></View>}
        renderItem={({ item }) => {
          return <PlaceCard place={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "column",
  },
  separator: {
    height: 20,
  },
  header: {
    marginVertical: 20,
    fontSize: 32,
    fontWeight: 700,
  },
  skeleton: {
    width: "100%",
    height: 120,
    borderRadius: 5,
    backgroundColor: "#d8e1e7",
  },
});

export default NearbySpots;
