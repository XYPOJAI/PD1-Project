import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Create from "./screens/Create";
import Details from "./screens/Details";
import Edit from "./screens/Edit";
import Index from "./screens/Index";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ title: "My Contacts" }}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ title: "Add Contact" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "Contact Details" }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ title: "Update Contact" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
