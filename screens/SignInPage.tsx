import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TitlePage from '../components/TitlePage';
import Input from '../components/Input';
import TourchContainer from '../components/TouchContainer';
import Button from '../components/Button';

function SignInPage(props: any) {
    const titleText = 'Welcome Back';
    const bodyText = 'Glad to see you back my buddy.';

    return (
        <View style={styles.container}>
            <TitlePage titleText={titleText} bodyText={bodyText} />
            <View style={styles.inputContainer}>
                <Input icon={'md-mail'} title='EMAIL' type='email' />
                <Input icon={'ios-lock'} title='PASSWORD' type='password' />
            </View>
            <TourchContainer>
                <Button>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>SIGN IN</Text>
                    </View>
                </Button>
                <Button style={{ marginTop: 4 }}>
                    <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
                </Button>
            </TourchContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 30,
        paddingTop: 25,
        paddingRight: 10,
    },
    touchContainer: {
        marginTop: '10%',
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: '10%',
    },
    titleText: {
        color: '#fff',
        fontSize: 15,
    },
    textContainer: {
        backgroundColor: '#6495ed',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    forgotText: {
        fontSize: 20, color: '#6495ed', fontWeight: 'bold', textAlign: "center"
    }
});

export default SignInPage;