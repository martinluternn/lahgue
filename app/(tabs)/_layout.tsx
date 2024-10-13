import LoginWall from "@/components/LoginWall";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export default function TabLayout() {
  const bottomSheetRef = useRef<any | undefined>();
  const [activeSelection, setActiveSelection] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const priorityChoice = [
    {
      key: "login",
      name: "Login",
      image: (
        <Svg
          width={18}
          height={18}
          fill={activeSelection == "login" ? "#65a4ec" : "#e4e4e4"}
          stroke={activeSelection == "login" ? "#65a4ec" : "#e4e4e4"}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="M12 4c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3zm6.002 16H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"
          />
        </Svg>
      ),
    },
    {
      key: "lahgueplus",
      name: "Lahgue Plus",
      image: (
        <Svg
          width={18}
          height={18}
          fill={activeSelection == "lahgueplus" ? "#65a4ec" : "#e4e4e4"}
          stroke={activeSelection == "lahgueplus" ? "#65a4ec" : "#e4e4e4"}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="m20.43 5.76-8-3.56a1 1 0 0 0-.82 0l-8 3.56a1 1 0 0 0-.59.9c0 2.37.44 10.8 8.51 15.11a1 1 0 0 0 1 0c8-4.3 8.58-12.71 8.57-15.1a1 1 0 0 0-.67-.91zm-4.43 7h-3v3h-2v-3H8v-2h3v-3h2v3h3z"
          />
        </Svg>
      ),
    },
  ];

  const regularChoice = [
    {
      key: "download",
      name: "Download aplikasi",
      image: (
        <Svg
          width={18}
          height={18}
          fill={activeSelection == "download" ? "#65a4ec" : "#e4e4e4"}
          stroke={activeSelection == "download" ? "#65a4ec" : "#e4e4e4"}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"
          />
        </Svg>
      ),
    },
    {
      key: "setting",
      name: "Pengaturan",
      image: (
        <Svg
          width={18}
          height={18}
          fill={activeSelection == "setting" ? "#65a4ec" : "#e4e4e4"}
          stroke={activeSelection == "setting" ? "#65a4ec" : "#e4e4e4"}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"
          />
          <Path
            stroke="none"
            d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"
          />
        </Svg>
      ),
    },
    {
      key: "contactus",
      name: "Hubungi kami",
      image: (
        <Svg
          width={18}
          height={18}
          fill={activeSelection == "contactus" ? "#65a4ec" : "#e4e4e4"}
          stroke={activeSelection == "contactus" ? "#65a4ec" : "#e4e4e4"}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"
          />
          <Path stroke="none" d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z" />
        </Svg>
      ),
    },
  ];

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}
      style={{
        backgroundColor: "#000000",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100%",
      }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "",
            headerShown: false,
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
            tabBarStyle: { paddingBottom: 0 },
          }}
        />
        <Tabs.Screen
          name="friend"
          options={{
            tabBarLabel: "",
            headerShown: false,
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
            tabBarStyle: { paddingBottom: 0 },
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
            tabBarLabel: "",
            headerShown: false,
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
            tabBarStyle: { paddingBottom: 0 },
          }}
        />
        <Tabs.Screen
          name="profile"
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              bottomSheetRef.current?.expand();
            },
          }}
          options={{
            tabBarLabel: "",
            headerShown: false,
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
            tabBarStyle: { paddingBottom: 0 },
          }}
        />
      </Tabs>
      {LoginWall(modalVisible, setModalVisible)}
      {/* Bottom Sheet Component */}
      <BottomSheet
        enableOverDrag
        ref={bottomSheetRef}
        index={-1}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: "#1A1A1A" }}
        style={{ zIndex: 100 }}
        snapPoints={["50%"]}
        handleComponent={null}
        enablePanDownToClose
        onChange={(index) => {
          if (index == -1) {
            bottomSheetRef.current?.close();
            setActiveSelection("");
          }
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 20, color: "#e4e4e4", fontWeight: "bold" }}>
            Pilihan
          </Text>
          <TouchableOpacity
            onPress={() => {
              setActiveSelection("");
              bottomSheetRef.current?.close();
            }}
          >
            <Svg
              width={32}
              height={32}
              fill="#e4e4e4"
              stroke="#e4e4e4"
              strokeWidth={0}
              viewBox="0 0 24 24"
            >
              <Path
                stroke="none"
                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={{ height: 1, backgroundColor: "#414141" }} />
        {priorityChoice.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 24,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setActiveSelection(item.key)}
          >
            {item.image}
            <Text
              style={[
                { fontSize: 16, color: "#e4e4e4", marginLeft: 16 },
                activeSelection == item.key && { color: "#65a4ec" },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
        <View style={{ height: 4 }} />
        <View style={{ height: 1, backgroundColor: "#414141" }} />
        <View style={{ height: 4 }} />
        {regularChoice.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 24,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setActiveSelection(item.key)}
          >
            {item.image}
            <Text
              style={[
                { fontSize: 16, color: "#e4e4e4", marginLeft: 16 },
                activeSelection == item.key && { color: "#65a4ec" },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </BottomSheet>
    </View>
  );
}
