import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#eef0f1",
    marginVertical: 8,
  },
  articleContainer: {
    padding: 12,
    gap: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: 500,
    color: "#1d1e1fcf",
  },
  description: {
    fontSize: 14,
    color: "#1d1e1fcf",
  },
  image: {
    height: 125,
    objectFit: "cover",
  },
});

export default styles;
