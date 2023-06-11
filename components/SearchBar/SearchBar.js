import { useState, createContext } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import FiltersToggle from "./FiltersToggle";
import styles from "./Searchbar.style";

export const SearchContext = createContext();

const SearchBar = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showToggle, setShowToggle] = useState(false);
  const [filters, setFilters] = useState({
    from: { touched: false, value: new Date(Date.now()) },
    to: { touched: false, value: new Date(Date.now()) },
    sortBy: { touched: false, value: "" },
  });

  const handleButtonStyleOnPress = ({ pressed }) => {
    return pressed
      ? StyleSheet.compose(styles.filter_btn, styles.filter_btn_active)
      : styles.filter_btn;
  };

  const handleSubmit = () => {
    navigation.navigate("Search Results", {
      searchQuery,
      filters,
    });
    setFilters({
      from: { touched: false, value: new Date(Date.now()) },
      to: { touched: false, value: new Date(Date.now()) },
      sortBy: { touched: false, value: "" },
    });
    setSearchQuery("");
  };

  return (
    <SearchContext.Provider value={{ searchQuery, filters, setFilters }}>
      <View>
        <View style={styles.searchbar_container}>
          <TextInput
            enterKeyHint="search"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={handleSubmit}
            placeholder="Search in All Articles..."
            placeholderTextColor="#eef0f1"
            style={styles.input_container}
          />
          <Pressable
            style={handleButtonStyleOnPress}
            onPress={() => setShowToggle(!showToggle)}
          >
            <Text style={styles.filter_btn_text}>Filters</Text>
          </Pressable>
        </View>
        {showToggle && <FiltersToggle />}
      </View>
    </SearchContext.Provider>
  );
};

export default SearchBar;
