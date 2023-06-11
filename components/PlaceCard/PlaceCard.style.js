import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card_container: {
    backgroundColor: "#d8e1e7",
    borderRadius: 5,
    padding: 12,
    overflow: "hidden",
    minHeight: 120,
  },
  card_headline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card_h1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 3,
    right: 4,
  },
  place_name: {
    fontSize: 18,
    fontWeight: 600,
  },
  distance: {
    fontSize: 16,
    fontWeight: 500,
    color: "#5c85d3",
  },
  category_icon: {
    tintColor: "#5c85d3",
  },
  place_category: {
    position: "absolute",
    textAlign: "right",
    right: 0,
    bottom: -4,
    fontSize: 32,
    fontWeight: "700",
    color: "#5c86d33b",
  },
  place_address: {
    color: "#111111e6",
    fontWeight: 200,
    fontSize: 16,
  },
});

export default styles;
