import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SpaceLarge from "../SpaceLarge";
import { exploreMemeCategoryDrawerMenu } from "@/mock/exploreMemeCategoryDrawerMenu";
import { exploreMemeDrawerMenu } from "@/mock/exploreMemeDrawerMenu";
import {
  informationSectionOne,
  informationSectionTwo,
} from "@/mock/informationDrawerMenu";
import { mainDrawerMenu } from "@/mock/mainDrawerMenu";
import { otherMemeDrawerMenu } from "@/mock/otherMemeDrawerMenu";
import Svg, { Path } from "react-native-svg";
import Divider from "../Divider";
import MainButton from "../MainButton";
import SpaceMedium from "../SpaceMedium";
import SpaceSmall from "../SpaceSmall";
import drawerMenuStyles from "./style";
import ThemeColor from "@/themes/color";

export default function DrawerMenu() {
  const [activeDrawer, setActiveDrawer] = useState("Home");
  const [showOtherMeme, setShowOtherMeme] = useState(false);
  const [showExploreMeme, setShowExploreMeme] = useState(false);

  return (
    <ScrollView>
      <SpaceLarge />
      <View style={drawerMenuStyles.box}>
        <Text style={drawerMenuStyles.titleLogin}>
          {"Mau ngepost meme kamu sendiri?"}
        </Text>
        <Text style={drawerMenuStyles.subtitleLogin}>
          {"Login dengan Google sekarang!"}
        </Text>
        <MainButton title="Login" onPress={() => null} />
      </View>
      {mainDrawerMenu.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={[
            drawerMenuStyles.unselectMenu,
            activeDrawer == item.key && drawerMenuStyles.selectMenu,
          ]}
          onPress={() => setActiveDrawer(item.key)}
        >
          {item.image}
          <Text style={drawerMenuStyles.titleMenu}>{item.name}</Text>
        </TouchableOpacity>
      ))}
      <SpaceSmall />
      <Divider />
      <SpaceSmall />
      <TouchableOpacity
        style={[drawerMenuStyles.unselectMenu, drawerMenuStyles.justifyContent]}
        onPress={() => {
          setShowOtherMeme(!showOtherMeme);
        }}
      >
        <Text style={drawerMenuStyles.otherMemeSection}>Meme lain</Text>
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.white}
          stroke={ThemeColor.white}
          strokeWidth={0}
          viewBox="0 0 24 24"
          rotation={showOtherMeme ? 0 : 180}
        >
          <Path
            stroke="none"
            d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19zm9-12.243L19.092 17H4.908L12 6.757z"
          />
        </Svg>
      </TouchableOpacity>
      {showOtherMeme && (
        <>
          <View style={{ height: 8 }} />
          {otherMemeDrawerMenu.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={[
                drawerMenuStyles.unselectCategoryMenu,
                activeDrawer == item.key && drawerMenuStyles.selectMenu,
              ]}
              onPress={() => setActiveDrawer(item.key)}
            >
              {item.image}
              <Text style={drawerMenuStyles.titleCategoryMenu}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </>
      )}
      <SpaceSmall />
      <Divider />
      <SpaceSmall />
      <TouchableOpacity
        style={drawerMenuStyles.bgExploreMeme}
        onPress={() => {
          setShowExploreMeme(!showExploreMeme);
        }}
      >
        <Text style={drawerMenuStyles.exploreMenuTitle}>Jelajah</Text>
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.white}
          stroke={ThemeColor.white}
          strokeWidth={0}
          viewBox="0 0 24 24"
          rotation={showExploreMeme ? 0 : 180}
        >
          <Path
            stroke="none"
            d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19zm9-12.243L19.092 17H4.908L12 6.757z"
          />
        </Svg>
      </TouchableOpacity>
      {showExploreMeme && (
        <>
          <View style={{ height: 8 }} />
          {exploreMemeDrawerMenu.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={[
                drawerMenuStyles.unselectCategoryMenu,
                activeDrawer == item.key && drawerMenuStyles.selectMenu,
              ]}
              onPress={() => setActiveDrawer(item.key)}
            >
              {item.image}
              <Text style={drawerMenuStyles.titleCategoryMenu}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </>
      )}
      <SpaceLarge />
      <Text style={drawerMenuStyles.exploreTitle}>Telusuri</Text>
      {exploreMemeCategoryDrawerMenu.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            drawerMenuStyles.unselectExploreMenu,
            activeDrawer == item.id && drawerMenuStyles.selectMenu,
          ]}
          onPress={() => setActiveDrawer(item.id)}
        >
          <Image
            style={{ width: 24, height: 24 }}
            source={{ uri: item.image }}
            resizeMode="cover"
          />
          <Text style={drawerMenuStyles.titleExploreMenu}>{item.name}</Text>
          <TouchableOpacity>
            <Svg
              width={16}
              height={16}
              fill={ThemeColor.lightGrey}
              stroke={ThemeColor.lightGrey}
              strokeWidth={0}
              viewBox="0 0 24 24"
            >
              <Path
                stroke="none"
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              />
            </Svg>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      <SpaceMedium />
      <View style={drawerMenuStyles.informationPaddingHorizontal}>
        <Text style={drawerMenuStyles.informationTitle}>Informasi</Text>
        <View style={drawerMenuStyles.informationSubtitle}>
          {informationSectionOne.map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => {
                setActiveDrawer(item.key);
              }}
            >
              <Text
                style={[
                  drawerMenuStyles.informationSection,
                  activeDrawer == item.key && drawerMenuStyles.selectedText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={drawerMenuStyles.informationContainer}>
          {informationSectionTwo.map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => {
                setActiveDrawer(item.key);
              }}
            >
              <Text
                style={[
                  drawerMenuStyles.informationSection,
                  activeDrawer == item.key && drawerMenuStyles.selectedText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <SpaceLarge />
    </ScrollView>
  );
}
