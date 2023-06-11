import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    minHeight: "100%",
    marginVertical: 10,
  },
  h2: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    gap: 10,
  },
  h2_text: {
    fontSize: 24,
    fontWeight: 400,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#3e8bf6b0",
    borderRadius: 10,
    width: 150,
  },
  toggle_active: {
    backgroundColor: "#5d91da",
  },
  category_text: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "500",
    color: "#eef0f1",
  },
  modal: {
    position: "absolute",
    top: 7,
    left: 188,
    zIndex: 1,
    backgroundColor: "#74a6ec",
    width: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  modal_btn: {
    padding: 10,
  },
  modal_btn_active: {
    backgroundColor: "#5d91da",
  },
  modal_btn_text: {
    color: "#eef0f1",
    textTransform: "capitalize",
    fontWeight: "500",

    fontSize: 16,
  },
  masonry_list_container: {
    columnGap: 16,
  },
  skeleton: {
    height: 230,
    backgroundColor: "#86878a90",
    overflow: "hidden",
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default styles;
