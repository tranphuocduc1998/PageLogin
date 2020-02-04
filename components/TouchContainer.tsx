import React from 'react';
import { StyleSheet, View } from 'react-native';

function TourchContainer(props: any) {

    return (
        <View style={styles.touchContainer}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    touchContainer: {
        marginTop: '5%',
        alignItems: 'center',
    },
});

export default TourchContainer;