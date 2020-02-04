import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Footer(props: any) {
    const { titleText, titleButton, onChangePage } = props;
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text style={styles.titleText}>{titleText}</Text>
                <Button title={titleButton} onPress={onChangePage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 0,
    },
    titleText: {
        color: '#a9a9a9',
    },
});

export default Footer;