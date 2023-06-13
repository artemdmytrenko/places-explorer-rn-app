import { useEffect, useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import NearbySpots from "./screens/NearbySpots";
import Article from "./screens/Article";
import SearchResults from "./screens/SearchResults";
import * as Location from "expo-location";
import Error from "./screens/Error";

export const LocationContext = createContext({});

const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    };
    getPermissions();
  }, []);

  return (
    <LocationContext.Provider value={location}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Nearby Spots" component={NearbySpots} />
          <Stack.Screen name="Search Results" component={SearchResults} />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Article" component={Article} />
            <Stack.Screen name="Error" component={Error} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </LocationContext.Provider>
  );
}
