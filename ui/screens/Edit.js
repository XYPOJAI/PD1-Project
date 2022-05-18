import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import TxtInput from "../components/TxtInput";
import theme from "../theme";
import { updateUserAsync } from "../users.service";

export default function Edit() {
  //navigation
  const navigation = useNavigation();
  const route = useRoute();
  let u = route.params;
  //state
  const [firstName, setFirstName] = useState(u.firstName);
  const [lastName, setLastName] = useState(u.lastName);
  const [phone, setPhone] = useState(u.phone);
  const [email, setEmail] = useState(u.email);
  const [department, setDepartment] = useState(u.department);
  const [street, setStreet] = useState(u.address.street);
  const [suburb, setSuburb] = useState(u.address.suburb);
  const [state, setState] = useState(u.address.state);
  const [country, setCountry] = useState(u.address.country);
  //functions
  function submit() {
    updateUserAsync(buildUserObject()).then((json) => {
      let params = { op: "update", data: json };
      navigation.navigate("Index", params);
    });
  }

  function buildUserObject() {
    let user = {
      id: u.id,
      firstName,
      lastName,
      phone,
      email,
      department,
      address: {
        street,
        suburb,
        state,
        country,
      },
    };
    return user;
  }
  //JSX
  return (
    <View>
      <Text>First Name:</Text>
      <TxtInput value={firstName} onChangeText={setFirstName} />
      <Text>Last Name:</Text>
      <TxtInput value={lastName} onChangeText={setLastName} />
      <Text>Phone:</Text>
      <TxtInput value={phone} onChangeText={setPhone} />
      <Text>Email:</Text>
      <TxtInput value={email} onChangeText={setEmail} />
      <Text>Department:</Text>
      <TxtInput value={department} onChangeText={setDepartment} />
      <Text>Address:</Text>
      <Text>Street:</Text>
      <TxtInput value={street} onChangeText={setStreet} />
      <Text>Suburb:</Text>
      <TxtInput value={suburb} onChangeText={setSuburb} />
      <Text>State:</Text>
      <TxtInput value={state} onChangeText={setState} />
      <Text>Country:</Text>
      <TxtInput value={country} onChangeText={setCountry} />
      <Pressable style={theme.saveButton} onPress={submit}>
        <Text style={theme.saveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
}
