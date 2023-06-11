import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import NearbySpots from "./screens/NearbySpots";
import Article from "./screens/Article";
import SearchResults from "./screens/SearchResults";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
