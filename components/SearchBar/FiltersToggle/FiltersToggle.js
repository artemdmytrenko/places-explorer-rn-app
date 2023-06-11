import { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SearchContext } from "../SearchBar";
import styles from "./FiltersToggle.style";

const sorts = [
  { name: "Relevance", api_name: "relevancy" },
  { name: "Date", api_name: "publishedAt" },
  { name: "Popularity", api_name: "popularity" },
];

const FiltersToggle = () => {
  const { filters, setFilters } = useContext(SearchContext);

  const onChangeFilter = (filter, value) => {
    setFilters({ ...filters, [filter]: { touched: true, value: value } });
  };

  const handleButtonStyleOnChange = (value) => {
    return filters.sortBy.value === value
      ? StyleSheet.compose(styles.btn, styles.btn_active)
      : styles.btn;
  };

  return (
    <View style={styles.container}>
      <View style={styles.date_picker_container}>
        <Text>Time period</Text>
        <View style={styles.date_picker}>
          <Text style={styles.btn_text}>From</Text>
          <DateTimePicker
            value={filters.from.value}
            mode="date"
            maximumDate={filters.to.value}
            onChange={(e, value) => onChangeFilter("from", value)}
          />
        </View>
        <View style={styles.date_picker}>
          <Text style={styles.btn_text}>To</Text>
          <DateTimePicker
            value={filters.to.value}
            mode="date"
            maximumDate={new Date(Date.now())}
            onChange={(e, value) => onChangeFilter("to", value)}
          />
        </View>
      </View>
      <View style={styles.sortby_container}>
        <Text>Sort by</Text>
        {sorts.map(({ name, api_name }) => {
          return (
            <View style={styles.option}>
              <Pressable
                style={() => handleButtonStyleOnChange(api_name)}
                onPress={() => onChangeFilter("sortBy", api_name)}
              />
              <Text style={styles.btn_text}>{name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FiltersToggle;
