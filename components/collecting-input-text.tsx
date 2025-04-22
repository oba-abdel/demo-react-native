import { useState } from "react";
import { View, Text } from "react-native";
import styles from "../style";
import InputText from "./input-text";

export default function CollectingInputTextText() {
  const [changedText, setChangedText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  return (
    <View style={styles.container}>
      <InputText label="Basic Text InputText:" />
      <InputText label="Password InputText:" secureTextEntry />
      <InputText label="Return Key:" returnKeyType="search" />
      <InputText label="Placeholder Text:" placeholder="Search" />
      <InputText
        label="InputText Events:"
        onChangeText={(e:any) => {
          setChangedText(e);
        }}
        onSubmitEditing={(e:any) => {
          setSubmittedText(e.nativeEvent.text);
        }}
        onFocus={() => {
          setChangedText("");
          setSubmittedText("");
        }}
      />
      <Text>Changed: {changedText}</Text>
      <Text>Submitted: {submittedText}</Text>
    </View>
  );
}
