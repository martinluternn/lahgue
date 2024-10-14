import { Text, TouchableOpacity } from "react-native";
import mainButtonStyles from "./style";

const MainButton: React.FC<{ title: string, onPress: () => void }> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={mainButtonStyles.bg} onPress={onPress}>
      <Text style={mainButtonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
