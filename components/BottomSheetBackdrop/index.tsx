import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import bottomSheetBackdropStyles from "./style";

const CustomBottomSheetBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    disappearsOnIndex={-1}
    appearsOnIndex={0}
    opacity={0.5}
    style={bottomSheetBackdropStyles.container}
  />
);

export default CustomBottomSheetBackdrop;
