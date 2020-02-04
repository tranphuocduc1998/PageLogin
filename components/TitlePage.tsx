import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TitlePage(props: any) {
    const { titleText, bodyText } = props
    return (
        <View style={styles.titlePage}>
            <Text style={styles.titleText}>{titleText}</Text>
            <Text style={styles.bodyText}>{bodyText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titlePage: {
        flexDirection: 'column'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6495ed',
    },
    bodyText: {
        fontSize: 20,
        color: '#a9a9a9',
    },
});

export default TitlePage;