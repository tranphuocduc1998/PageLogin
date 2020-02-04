import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import Footer from '../components/Footer';

function Screen() {
    const [pageChoiced, setPageChoiced] = useState(true);
    let titlePage = 'Sign In';
    let titleText = 'Don\'t have an account?';
    let titleButton = 'Sign Up';
    let content = <SignInPage />
    if (!pageChoiced) {
        titlePage = 'Create Account';
        titleText = 'Already have an account?';
        titleButton = 'Sign In';
        content = <SignUpPage />
    }

    const onChangePage = () => {
        setPageChoiced(!pageChoiced);
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>{titlePage}</Text>
                </View>
                <View style={styles.screen}>
                    {content}
                    <Footer titleText={titleText} titleButton={titleButton} onChangePage={onChangePage} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6495ed',
        justifyContent: 'center',
    },
    screen: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopStartRadius: 35,
        borderTopEndRadius: 35,
        justifyContent: 'flex-end',
    },
    headerContainer: {
        width: '100%',
        height: '15%',
        justifyContent: 'flex-end',
        padding: 20,
    },
    headerTitle: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default Screen;