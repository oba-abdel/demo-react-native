
import { View, Text,TextInputProps,TextInput } from "react-native";
type InputProps = TextInputProps & {
    label: string;
  };
export default function InputText(props:InputProps){


    return (

        <View>
            <Text>
                {props.label}
            </Text>
            <TextInput {...props} />
        </View>
    );
}