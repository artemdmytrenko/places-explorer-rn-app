import { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
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
  const [showPicker, setShowPicker] = useState({ from: false, to: false });

  const onChangeFilter = (filter, value) => {
    setFilters({ ...filters, [filter]: { touched: true, value: value } });
  };

  const onChangeDateAndroid = (e, selectedDate, filter) => {
    if (e.type == "set") {
      setShowPicker({ ...showPicker, [filter]: !showPicker[filter] });
      setFilters({
        ...filters,
        [filter]: { touched: true, value: selectedDate },
      });
    } else {
      setShowPicker({ ...showPicker, [filter]: !showPicker[filter] });
    }
  };

  const handleButtonStyleOnChange = (value) => {
    return filters.sortBy.value === value
      ? StyleSheet.compose(styles.btn, styles.btn_active)
      : styles.btn;
  };

  const formatDate = (raw) => {
    let date = new Date(raw);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    return `${day}-${month}-${year}`;
  };

  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
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
      ) : (
        <View style={styles.date_picker_container}>
          <Text>Time period</Text>
          <View style={styles.date_picker}>
            <Text style={styles.btn_label}>From</Text>
            <Pressable
              style={styles.date_picker_toggle}
              onPress={() =>
                setShowPicker({ ...showPicker, from: !showPicker.from })
              }
            >
              <Text>{formatDate(filters.from.value)}</Text>
            </Pressable>
            {showPicker.from && (
              <DateTimePicker
                value={filters.from.value}
                mode="date"
                display="spinner"
                maximumDate={filters.to.value}
                onChange={(e, date) => onChangeDateAndroid(e, date, "from")}
              />
            )}
          </View>
          <View style={styles.date_picker}>
            <Text style={styles.btn_label}>To</Text>
            <Pressable
              style={styles.date_picker_toggle}
              onPress={() =>
                setShowPicker({ ...showPicker, to: !showPicker.to })
              }
            >
              <Text>{formatDate(filters.to.value)}</Text>
            </Pressable>
            {showPicker.to && (
              <DateTimePicker
                value={filters.to.value}
                display="spinner"
                mode="date"
                minimumDate={filters.from.value}
                maximumDate={new Date(Date.now())}
                onChange={(e, date) => onChangeDateAndroid(e, date, "to")}
              />
            )}
          </View>
        </View>
      )}
      <View style={styles.sortby_container}>
        <Text>Sort by</Text>
        {sorts.map(({ name, api_name }) => {
          return (
            <View style={styles.option}>
              <Pressable
                style={() => handleButtonStyleOnChange(api_name)}
                onPress={() => onChangeFilter("sortBy", api_name)}
              />
              <Text style={styles.btn_label}>{name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FiltersToggle;
