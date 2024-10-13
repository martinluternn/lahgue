import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function GroupScreen() {
  return (
    <View style={{ alignItems: "center", paddingVertical: 16 }}>
      <Svg
        width="140"
        height="140"
        fill="#65a4ec"
        stroke="#65a4ec"
        strokeWidth={0}
        viewBox="0 0 512 512"
      >
        <Path
          stroke="none"
          d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-40h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zm40-256a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
        />
      </Svg>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#e4e4e4",
          marginTop: 12,
        }}
      >
        [401]
      </Text>
      <Text style={{ fontSize: 16, color: "#e4e4e4", marginTop: 12 }}>
        Login untuk melihat halaman ini
      </Text>
    </View>
  );
}
