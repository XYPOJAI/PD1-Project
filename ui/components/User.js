import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import theme from "../theme";

export default function User(props) {
  //navigation
  const navigation = useNavigation();

  return (
    <View style={theme.userTile}>
      <View>
        <Text>
          {props.user.firstName} {props.user.lastName}
        </Text>
      </View>
      <View style={theme.userTileButtonContainer}>
        <Pressable
          style={theme.userTileButton}
          onPress={() => navigation.navigate("Details", props.user)}
        >
          <Text style={theme.userTileButtonText}>Details</Text>
        </Pressable>
        <Pressable
          style={theme.userTileButton}
          onPress={() => navigation.navigate("Edit", props.user)}
        >
          <Text style={theme.userTileButtonText}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
}
