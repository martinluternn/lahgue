import {
  priorityChoiceProfileMenu,
  regularChoiceProfileMenu,
} from "@/mock/bottomSheetProfileMenu";
import ThemeColor from "@/themes/color";
import BottomSheet from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import CustomBottomSheetBackdrop from "../BottomSheetBackdrop";
import bottomSheetProfileStyles from "./style";
import Divider from "../Divider";
import SpaceExtraSmall from "../SpaceExtraSmall";

export default function BottomSheetProfile(
  defaultState: boolean,
  onPress: (flag: boolean) => void
) {
  const bottomSheetRef = useRef<any | undefined>();
  const [activeSelection, setActiveSelection] = useState("");

  useEffect(() => {
    if (defaultState) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [defaultState]);

  return (
    <BottomSheet
      enableOverDrag
      ref={bottomSheetRef}
      index={-1}
      backdropComponent={CustomBottomSheetBackdrop}
      backgroundStyle={bottomSheetProfileStyles.bg}
      style={{ zIndex: 100 }}
      snapPoints={["50%"]}
      handleComponent={null}
      enablePanDownToClose
      onChange={(index) => {
        if (index == -1) {
          bottomSheetRef.current?.close();
          setActiveSelection("");
          onPress(false);
        }
      }}
    >
      <View style={bottomSheetProfileStyles.content}>
        <Text style={bottomSheetProfileStyles.title}>Pilihan</Text>
        <TouchableOpacity
          onPress={() => {
            setActiveSelection("");
            bottomSheetRef.current?.close();
            onPress(false);
          }}
        >
          <Svg
            width={32}
            height={32}
            fill={ThemeColor.lightGrey}
            stroke={ThemeColor.lightGrey}
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
      <Divider />
      {priorityChoiceProfileMenu(activeSelection).map((item) => (
        <TouchableOpacity
          key={item.key}
          style={bottomSheetProfileStyles.bgPress}
          onPress={() => setActiveSelection(item.key)}
        >
          {item.image}
          <Text
            style={[
              bottomSheetProfileStyles.textItem,
              activeSelection == item.key &&
                bottomSheetProfileStyles.textSelected,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
      <SpaceExtraSmall />
      <Divider />
      <SpaceExtraSmall />
      {regularChoiceProfileMenu(activeSelection).map((item) => (
        <TouchableOpacity
          key={item.key}
          style={bottomSheetProfileStyles.bgPress}
          onPress={() => setActiveSelection(item.key)}
        >
          {item.image}
          <Text
            style={[
              bottomSheetProfileStyles.textItem,
              activeSelection == item.key &&
                bottomSheetProfileStyles.textSelected,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </BottomSheet>
  );
}
