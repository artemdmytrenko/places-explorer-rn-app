import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchbar_container: {
    marginVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#E2EFFD",
    height: 70,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  input_container: {
    backgroundColor: "#3e8bf6b0",
    fontSize: 18,
    flex: 3,
    paddingVertical: 9,
    paddingLeft: 12,
    borderRadius: 14,
    color: "#eef0f1",
  },
  filter_btn: {
    flex: 1,
    backgroundColor: "#3e8bf61d",
    paddingVertical: 9,
    borderRadius: 14,
  },
  filter_btn_active: {
    backgroundColor: "#1c65cc3e",
  },
  filter_btn_text: {
    fontSize: 18,
    color: "#3e8bf6c7",
    textAlign: "center",
  },
});

export default styles;
