import React from "react"
import { ColorValue, TouchableOpacity, Text } from "react-native"

interface ButtonData {
    label: string,
    onPressed: () => void,
    color: ColorValue

}

const buttonText =  {
    color: "white"
}

const Button = ({ label, onPressed, color }: ButtonData) => (
    <TouchableOpacity
        onPress={onPressed}
        style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: color
        }}
    >
        <Text style={buttonText}>{label}</Text>
    </TouchableOpacity>
)

export default Button