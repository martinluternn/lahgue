import { useEffect, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import loginWallStyles from "./style";
import ThemeColor from "@/themes/color";

export default function LoginWall(
  defaultState: boolean,
  onPressed: (flag: boolean) => void
) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(defaultState);
  }, [defaultState]);

  return (
    <>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          onPressed(false);
        }}
      >
        <TouchableOpacity
          style={loginWallStyles.modalOverlay}
          onPress={() => {
            setModalVisible(false);
            onPressed(false);
          }}
        >
          <View style={loginWallStyles.modalView}>
            <View style={loginWallStyles.image}>
              <Image
                style={loginWallStyles.imageInside}
                source={require("@/assets/images/ic-logo.jpeg")}
              />
            </View>
            <Text style={loginWallStyles.title}>Selamat Datang!</Text>
            <Text style={loginWallStyles.subtitle}>
              Buat meme, beri vote, dan berkomentar setelah login!
            </Text>
            <TouchableOpacity style={loginWallStyles.container}>
              <Svg width={16} height={16} strokeWidth={0} viewBox="0 0 48 48">
                <Path
                  fill={ThemeColor.google1}
                  stroke="none"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <Path
                  fill={ThemeColor.google2}
                  stroke="none"
                  d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                />
                <Path
                  fill={ThemeColor.google3}
                  stroke="none"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <Path
                  fill={ThemeColor.google4}
                  stroke="none"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </Svg>
              <Text style={loginWallStyles.titleButton}>
                Sign in dengan Google
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}
