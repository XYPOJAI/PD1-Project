import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import TxtInput from "../components/TxtInput";
import theme from "../theme";
import { createUserAsync } from "../users.service";

export default function Create() {
  //navigation
  const navigation = useNavigation();
  //state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  //functions
  function submit() {
    createUserAsync(buildUserObject()).then((json) => {
      let params = { op: "create", data: json };
      navigation.navigate("Index", params);
    });
  }
  function buildUserObject() {
    let user = {
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
      <Pressable style={theme.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={theme.cancelButtonText}>Cancel</Text>
      </Pressable>
    </View>
  );
}
