import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drawer from "expo-router/drawer";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const informationSectionOne = [
  { key: "kontak", name: "Kontak" },
  { key: "aturan", name: "Aturan" },
  { key: "ketentuan", name: "Ketentuan" },
];

const informationSectionTwo = [
  { key: "kebijakan", name: "Kebijakan" },
  { key: "lahgue+", name: "Lahgue+" },
  { key: "koin", name: "Koin" },
];

const mainMenu = [
  {
    key: "home",
    name: "Home",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
        />
      </Svg>
    ),
  },
  {
    key: "fresh",
    name: "Fresh",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
        />
        <Path stroke="none" d="M13 7h-2v6h6v-2h-4z" />
      </Svg>
    ),
  },
  {
    key: "trending",
    name: "Trending",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="m10 10.414 4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z"
        />
      </Svg>
    ),
  },
  {
    key: "topic",
    name: "Topik",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#ffffff"
        stroke="#ffffff"
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
  },
];

const otherMeme = [
  {
    key: "peringkat",
    name: "Peringkat",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#e4e4e4"
        stroke="#e4e4e4"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z"
        />
      </Svg>
    ),
  },
  {
    key: "tersimpan",
    name: "Tersimpan",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#e4e4e4"
        stroke="#e4e4e4"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path stroke="none" d="M11.024 11.536 10 10l-2 3h9l-3.5-5z" />
        <Circle cx={9.503} cy={7.497} r={1.503} stroke="none" />
        <Path
          stroke="none"
          d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"
        />
      </Svg>
    ),
  },
  {
    key: "acak",
    name: "Acak",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#e4e4e4"
        stroke="#e4e4e4"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"
        />
        <Path
          stroke="none"
          d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"
        />
      </Svg>
    ),
  },
];

const exploreMeme = [
  {
    key: "donatur",
    name: "Donatur",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#e4e4e4"
        stroke="#e4e4e4"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"
        />
      </Svg>
    ),
  },
  {
    key: "medali",
    name: "Medali",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#e4e4e4"
        stroke="#e4e4e4"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M12 22c3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7s3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm-1-8H7v5.518a8.957 8.957 0 0 1 4-1.459V2zm6 0h-4v4.059a8.957 8.957 0 0 1 4 1.459V2z"
        />
        <Path
          stroke="none"
          d="m10.019 15.811-.468 2.726L12 17.25l2.449 1.287-.468-2.726 1.982-1.932-2.738-.398L12 11l-1.225 2.481-2.738.398z"
        />
      </Svg>
    ),
  },
  {
    key: "tokokoin",
    name: "Toko koin",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#e4e4e4"
        stroke="#e4e4e4"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
        />
        <Path
          stroke="none"
          d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z"
        />
      </Svg>
    ),
  },
  {
    key: "discord",
    name: "Discord",
    image: (
      <Svg
        width={16}
        height={16}
        fill="#e4e4e4"
        stroke="#e4e4e4"
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        />
      </Svg>
    ),
  },
];

const exploreSection = [
  {
    id: "funny",
    name: "Lucu",
    image: "https://lahelu.com/media/hashtags/funny.jpg",
  },
  {
    id: "relate",
    name: "Relate",
    image: "https://lahelu.com/media/hashtags/relate.jpg",
  },
  {
    id: "game",
    name: "Gaming",
    image: "https://lahelu.com/media/hashtags/gaming.jpg",
  },
  {
    id: "nostalgic",
    name: "Nostalgia",
    image: "https://lahelu.com/media/hashtags/nostalgia.jpg",
  },
  {
    id: "sad",
    name: "Sad",
    image: "https://lahelu.com/media/hashtags/sad.jpg",
  },
  {
    id: "random",
    name: "Random",
    image: "https://lahelu.com/media/hashtags/random.jpg",
  },
  {
    id: "wtf",
    name: "Wtf",
    image: "https://lahelu.com/media/hashtags/wtf.jpg",
  },
  {
    id: "rage",
    name: "Rage",
    image: "https://lahelu.com/media/hashtags/rage.jpg",
  },
  {
    id: "anime",
    name: "Anime",
    image: "https://lahelu.com/media/hashtags/anime.jpg",
  },
  {
    id: "sarcas",
    name: "Sarkas",
    image: "https://lahelu.com/media/hashtags/sarcastic.jpg",
  },
  {
    id: "dark",
    name: "Dark",
    image: "https://lahelu.com/media/hashtags/dark.jpg",
  },
  {
    id: "absurd",
    name: "Absurd",
    image: "https://lahelu.com/media/hashtags/absurd.jpg",
  },
  {
    id: "cringe",
    name: "Cringe",
    image: "https://lahelu.com/media/hashtags/cringe.jpg",
  },
  {
    id: "sus",
    name: "Sus",
    image: "https://lahelu.com/media/hashtags/sus.jpg",
  },
  {
    id: "animal",
    name: "Binatang",
    image: "https://lahelu.com/media/hashtags/animal.jpg",
  },
];

const styles = StyleSheet.create({
  box: {
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#414141",
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    padding: 16,
  },
});

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

  const themes = {
    ...DefaultTheme,
    colors: {
      background: "#1A1A1A",
      text: "#ffffff",
      card: "#1A1A1A",
      primary: "#65A4EC",
    },
  } as Theme;

  const CustomDrawerComponent = () => {
    const [activeDrawer, setActiveDrawer] = useState("Home");
    const [showOtherMeme, setShowOtherMeme] = useState(false);
    const [showExploreMeme, setShowExploreMeme] = useState(false);

    return (
      <ScrollView>
        <View style={{ height: 24 }} />
        <View style={styles.box}>
          <Text
            style={{
              color: "#e4e4e4",
              textAlign: "center",
              paddingBottom: 8,
              fontWeight: 700,
            }}
          >
            {"Mau ngepost meme kamu sendiri?"}
          </Text>
          <Text
            style={{
              color: "#e4e4e4",
              textAlign: "center",
              paddingBottom: 8,
              fontSize: 12,
            }}
          >
            {"Login dengan Google sekarang!"}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#65a4ec",
              borderRadius: 999,
              paddingVertical: 8,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {"Login"}
            </Text>
          </TouchableOpacity>
        </View>
        {mainMenu.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={[
              {
                paddingHorizontal: 24,
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 12,
              },
              activeDrawer == item.key && { backgroundColor: "#65a4ec" },
            ]}
            onPress={() => setActiveDrawer(item.key)}
          >
            {item.image}
            <Text style={{ color: "#ffffff", fontWeight: 700, marginLeft: 16 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
        <View style={{ height: 8 }} />
        <View style={{ height: 1, backgroundColor: "#414141" }} />
        <View style={{ height: 8 }} />
        <TouchableOpacity
          style={{
            paddingHorizontal: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => {
            setShowOtherMeme(!showOtherMeme);
          }}
        >
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>
            Meme lain
          </Text>
          <Svg
            width={16}
            height={16}
            fill="#ffffff"
            stroke="#ffffff"
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
            {otherMeme.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={[
                  {
                    paddingHorizontal: 24,
                    paddingVertical: 8,
                    flexDirection: "row",
                    alignItems: "center",
                  },
                  activeDrawer == item.key && { backgroundColor: "#65a4ec" },
                ]}
                onPress={() => setActiveDrawer(item.key)}
              >
                {item.image}
                <Text
                  style={{ color: "#e4e4e4", fontSize: 16, marginLeft: 16 }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </>
        )}
        <View style={{ height: 8 }} />
        <View style={{ height: 1, backgroundColor: "#414141" }} />
        <View style={{ height: 8 }} />
        <TouchableOpacity
          style={{
            paddingHorizontal: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => {
            setShowExploreMeme(!showExploreMeme);
          }}
        >
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>
            Jelajah
          </Text>
          <Svg
            width={16}
            height={16}
            fill="#ffffff"
            stroke="#ffffff"
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
            {exploreMeme.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={[
                  {
                    paddingHorizontal: 24,
                    paddingVertical: 8,
                    flexDirection: "row",
                    alignItems: "center",
                  },
                  activeDrawer == item.key && { backgroundColor: "#65a4ec" },
                ]}
                onPress={() => setActiveDrawer(item.key)}
              >
                {item.image}
                <Text
                  style={{ color: "#e4e4e4", fontSize: 16, marginLeft: 16 }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </>
        )}
        <View style={{ height: 24 }} />
        <Text
          style={{
            color: "#65a4ec",
            fontWeight: "bold",
            paddingHorizontal: 24,
            width: "100%",
            fontSize: 16,
          }}
        >
          Telusuri
        </Text>
        {exploreSection.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              {
                flexDirection: "row",
                paddingVertical: 10,
                paddingHorizontal: 24,
                alignItems: "center",
                justifyContent: "space-between",
              },
              activeDrawer == item.id && { backgroundColor: "#65a4ec" },
            ]}
            onPress={() => setActiveDrawer(item.id)}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={{ uri: item.image }}
              resizeMode="cover"
            />
            <Text
              style={{
                flex: 1,
                color: "#e4e4e4",
                marginLeft: 14,
              }}
            >
              {item.name}
            </Text>
            <TouchableOpacity>
              <Svg
                width={16}
                height={16}
                fill="#e4e4e4"
                stroke="#e4e4e4"
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
        <View style={{ height: 16 }} />
        <View
          style={[
            {
              paddingHorizontal: 24,
            },
          ]}
        >
          <Text
            style={{
              color: "#65a4ec",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 4,
            }}
          >
            Informasi
          </Text>
          <View
            style={[
              {
                flexDirection: "row",
                paddingRight: 24,
                marginBottom: 4,
                columnGap: 12,
              },
            ]}
          >
            {informationSectionOne.map((item) => (
              <TouchableOpacity
                key={item.key}
                onPress={() => {
                  setActiveDrawer(item.key);
                }}
              >
                <Text
                  style={[
                    {
                      color: "#e4e4e4",
                      fontSize: 14,
                      marginBottom: 4,
                    },
                    activeDrawer == item.key && { color: "#65a4ec" },
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                paddingRight: 24,
                columnGap: 12,
              },
            ]}
          >
            {informationSectionTwo.map((item) => (
              <TouchableOpacity
                key={item.key}
                onPress={() => {
                  setActiveDrawer(item.key);
                }}
              >
                <Text
                  style={[
                    {
                      color: "#e4e4e4",
                      fontSize: 14,
                      marginBottom: 4,
                    },
                    activeDrawer == item.key && { color: "#65a4ec" },
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{ height: 24 }} />
      </ScrollView>
    );
  };

  return (
    <ThemeProvider value={themes}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerTintColor: "#D4D4D4",
            title: "LAHGUE",
            headerRightContainerStyle: { padding: 12, marginRight: 6 },
            headerRight(props) {
              return (
                <TouchableOpacity>
                  <Svg
                    width={24}
                    height={24}
                    fill="#D4D4D4"
                    stroke="#D4D4D4"
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
            headerTitleStyle: {
              fontWeight: "900",
              color: "#65a4ec",
              textShadowColor: "#4f738b",
              textShadowOffset: { width: 1.5, height: 1.5 },
              textShadowRadius: 1.5,
            },
          }}
          drawerContent={() => <CustomDrawerComponent />}
        />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
