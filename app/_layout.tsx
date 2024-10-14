import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drawer from "expo-router/drawer";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import drawerStyles from "./style";
import { themes } from "../themes/theme";
import DrawerMenu from "@/components/DrawerMenu";
import ThemeColor from "@/themes/color";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={themes}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerTintColor: ThemeColor.section,
            title: "LAHGUE",
            headerRightContainerStyle: drawerStyles.headerRightContainerStyle,
            headerRight(props) {
              return (
                <TouchableOpacity>
                  <Svg
                    width={24}
                    height={24}
                    fill={ThemeColor.section}
                    stroke={ThemeColor.section}
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    {...props}
                  >
                    <Path
                      stroke="none"
                      d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                    />
                  </Svg>
                </TouchableOpacity>
              );
            },
            headerTitleStyle: drawerStyles.headerTitleStyle,
          }}
          drawerContent={() => <DrawerMenu />}
        />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
