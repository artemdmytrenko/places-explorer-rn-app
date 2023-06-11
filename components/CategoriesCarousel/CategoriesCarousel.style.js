import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
    marginVertical: 10,
  },
  btn: {
    position: "relative",
    height: 100,
    width: "20%",
    backgroundColor: "#DFF0FF",
    borderRadius: 25,
  },
  btn_active: {
    backgroundColor: "#eef0f1",
  },
  p_cafes: {
    color: "#1d1e1fcf",
    fontSize: 14,
    fontWeight: 600,
    position: "absolute",
    top: 7,
    left: -5,
  },
  p_nearby_1: {
    color: "#1d1e1fcf",

    fontSize: 14,
    position: "absolute",
    top: 22,
    right: -5,
  },
  p_restaurants: {
    color: "#1d1e1fcf",

    fontWeight: 600,
    fontSize: 10,
    position: "absolute",
    bottom: 30,
    left: -7,
  },
  p_nearby_2: {
    color: "#1d1e1fcf",

    fontSize: 14,
    position: "absolute",
    bottom: 14,
    right: -6,
  },
  p_bars: {
    color: "#1d1e1fcf",

    fontWeight: 600,
    fontSize: 14,
    position: "absolute",
    top: 20,
    left: -4,
  },
  p_nearby_3: {
    color: "#1d1e1fcf",

    fontSize: 14,
    position: "absolute",
    top: 35,
    right: -3,
  },
  icon: {
    color: "#c2d9ecb3",
    zIndex: -1,
    position: "absolute",
    bottom: 13,
    left: 7,
  },
});

export default styles;
