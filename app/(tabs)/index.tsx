import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../home/home";
import FreshScreen from "../home/fresh";
import TrendingScreen from "../home/trending";

const Tab = createMaterialTopTabNavigator();

export default function HomeTabScreen() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Fresh" component={FreshScreen} />
        <Tab.Screen name="Trending" component={TrendingScreen} />
      </Tab.Navigator>
  );
}
