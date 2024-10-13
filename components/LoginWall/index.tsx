import { useEffect, useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export default function LoginWall(
  defaultState: boolean,
  onPressed: (flag: boolean) => void
) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(defaultState);
  }, [defaultState]);

  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
      width: "100%",
      padding: 16,
      backgroundColor: "#1A1A1A",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
  });

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
          style={styles.modalOverlay}
          onPress={() => {
            setModalVisible(false);
            onPressed(false);
          }}
        >
          <View style={styles.modalView}>
            <View
              style={{
                height: 50,
                width: 50,
                minHeight: 50,
                minWidth: 50,
                borderRadius: 999,
                backgroundColor: "#55A4FF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ height: 35, width: 35, borderRadius: 999 }}
                source={require("@/assets/images/ic-logo.jpeg")} // Specify the path to your image here
                // style={styles.image}
              />
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#e4e4e4",
                marginVertical: 8,
              }}
            >
              Selamat Datang!
            </Text>
            <Text style={{ fontSize: 12, color: "#949494", marginBottom: 24 }}>
              Buat meme, beri vote, dan berkomentar setelah login!
            </Text>
            <TouchableOpacity
              style={{
                borderColor: "#414141",
                borderWidth: 1,
                padding: 12,
                borderRadius: 4,
                alignItems: "center",
                flexDirection: "row",
                maxWidth: 250,
                width: "100%",
              }}
            >
              <Svg width={16} height={16} strokeWidth={0} viewBox="0 0 48 48">
                <Path
                  fill="#FFC107"
                  stroke="none"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <Path
                  fill="#FF3D00"
                  stroke="none"
                  d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                />
                <Path
                  fill="#4CAF50"
                  stroke="none"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <Path
                  fill="#1976D2"
                  stroke="none"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </Svg>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "silver",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Sign in dengan Google
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}
