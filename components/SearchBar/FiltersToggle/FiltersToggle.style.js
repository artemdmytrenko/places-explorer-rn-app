import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#e7e7eb",
    marginVertical: 10,
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    gap: 20,
  },
  date_picker_container: {
    justifyContent: "space-between",
    gap: 20,
  },
  date_picker: {
    width: 180,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date_picker_toggle: {
    backgroundColor: "#d5d6df",
    width: "60%",
    borderRadius: 8,
    padding: 4,
  },
  date_picker_modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  sortby_container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  btn: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderColor: "#6692e2d7",
    borderWidth: 1,
  },
  btn_active: { backgroundColor: "#6692e2d7" },
  btn_label: {
    fontSize: 18,
    color: "#121213eb",
  },
});

export default styles;
