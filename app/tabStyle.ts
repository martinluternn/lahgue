import { MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";

const tabsStyles = {
  tabOption: {
    tabBarLabelStyle: { textTransform: 'none', fontWeight: "700", fontSize: 14 },
  } as MaterialTopTabNavigationOptions,
  tabIndex: {
    tabBarLabel: "",
    headerShown: false,
    tabBarStyle: { paddingBottom: 0 },
  },
};

export default tabsStyles;
