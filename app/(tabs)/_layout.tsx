import LoginWall from "@/components/LoginWall";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import tabsStyles from "../tabStyle";
import BottomSheetProfile from "@/components/BottomSheetProfile";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <Svg
                width={16}
                height={16}
                fill={color}
                stroke={color}
                strokeWidth={0}
                viewBox="0 0 24 24"
              >
                <Path
                  stroke="none"
                  d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
                />
              </Svg>
            ),
            ...tabsStyles.tabIndex,
          }}
        />
        <Tabs.Screen
          name="friend"
          options={{
            tabBarIcon: ({ color }) => (
              <Svg
                width={16}
                height={16}
                fill={color}
                stroke={color}
                strokeWidth={0}
                viewBox="0 0 24 24"
              >
                <Path
                  stroke="none"
                  d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"
                />
                <Path
                  stroke="none"
                  d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"
                />
              </Svg>
            ),
            ...tabsStyles.tabIndex,
          }}
        />
        <Tabs.Screen
          name="post"
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setModalVisible(true);
            },
          }}
          options={{
            tabBarIcon: ({ color }) => (
              <Svg
                width={16}
                height={16}
                fill={color}
                stroke={color}
                strokeWidth={0}
                viewBox="0 0 24 24"
              >
                <Path stroke="none" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" />
                <Path
                  stroke="none"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                />
              </Svg>
            ),
            ...tabsStyles.tabIndex,
          }}
        />
        <Tabs.Screen
          name="profile"
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setBottomSheetVisible(true);
            },
          }}
          options={{
            tabBarIcon: ({ color }) => (
              <Svg
                width={16}
                height={16}
                fill={color}
                stroke={color}
                strokeWidth={0}
                viewBox="0 0 24 24"
              >
                <Path
                  stroke="none"
                  d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"
                />
                <Path
                  stroke="none"
                  d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"
                />
              </Svg>
            ),
            ...tabsStyles.tabIndex,
          }}
        />
      </Tabs>
      {LoginWall(modalVisible, setModalVisible)}
      {BottomSheetProfile(bottomSheetVisible, setBottomSheetVisible)}
    </>
  );
}
