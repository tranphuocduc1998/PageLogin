import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

function Button(props: any) {
    return (
        <TouchableOpacity {...props} style={styles.container} activeOpacity={0.3} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});

export default Button;