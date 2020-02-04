import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function Input(props) {
    const [secure, setSecure] = useState(true);
    const [iconSecure, setIconSecure] = useState('md-eye-off');

    let content = <View>
        <TextInput autoCompleteType={props.type} style={style.inputText} />
    </View>;
    let secured;
    if (props.type === 'password') {
        secured = () => {
            switch (secure) {
                case true:
                    setSecure(false);
                    setIconSecure('md-eye');
                    break;
                case false:
                    setSecure(true);
                    setIconSecure('md-eye-off');
                    break;

                default:
                    break;
            }
        }
        content = <View>
            <TextInput secureTextEntry={secure}
                autoCompleteType={props.type}
                style={style.inputText} />
            <TouchableOpacity style={style.iconStyle}  activeOpacity={0.2} onPress={secured} >
                <Ionicons name={iconSecure} size={20}></Ionicons>
            </TouchableOpacity>
        </View>
    }


    return (
        <View style={style.container}>
            <View style={style.icon}>
                <Ionicons name={props.icon} size={25} color='#ffffff'></Ionicons>
            </View>
            <View style={style.inputContainer}>
                <Text style={style.TitleText}>{props.title}</Text>
                {content}
            </View>
        </View>

    );
};


const style = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },

    icon: {
        width: '13%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6495ed',
    },

    inputContainer: {
        width: '80%',
        flexDirection: 'column',
    },

    TitleText: {
        color: '#6495ed',
        fontSize: 15,
        width: '100%',
        backgroundColor: '#fff'
    },

    inputText: {
        borderBottomColor: '#a9a9a9',
        borderBottomWidth: 1,
        marginVertical: 5,
        fontSize: 20
    },

    iconStyle: {
        position: 'absolute',
        top: 5,
        right: 0,
    }
});

export default Input;