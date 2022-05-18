import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import User from "../components/User";
import theme from "../theme";
import { getUsersAsync } from "../users.service";

export default function Index() {
  //navigation
  const navigation = useNavigation();
  const route = useRoute();
  //state
  const [users, setUsers] = useState([]);
  //use effect
  useEffect(() => {
    switch (route.params?.op) {
      case undefined:
        getUsersAsync().then((json) => setUsers(json));
        break;
      case "create":
        setUsers([...users, route.params.data]);
        break;
      case "update":
        setUsers(
          users.map((u) =>
            u.id == route.params.data.id ? route.params.data : u
          )
        );
        break;
    }
  }, [route.params]);
  //JSX
  return (
    <View>
      <Pressable
        style={theme.addContactButton}
        onPress={() => navigation.navigate("Create")}
      >
        <Text style={theme.addContactButtonText}>Add Contact</Text>
      </Pressable>
      {users.map((u) => (
        <User user={u} key={u.id} />
      ))}
    </View>
  );
}
