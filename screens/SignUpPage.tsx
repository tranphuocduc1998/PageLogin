import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TitlePage from '../components/TitlePage';
import Input from '../components/Input';
import TourchContainer from '../components/TouchContainer';
import Button from '../components/Button';

function SignUpPage(props: any) {
    const titleText = 'Welcome';
    const bodyText = 'Hi buddy, fill up to continue.';

    return (
        <View style={styles.container}>
            <TitlePage titleText={titleText} bodyText={bodyText} />
            <View style={styles.inputContainer}>
                <Input icon={'ios-person'} title='USERNAME' type='username' />
                <Input icon={'md-mail'} title='EMAIL' type='email' />
                <Input icon={'ios-lock'} title='PASSWORD' type='password' />
            </View>
            <TourchContainer>
                <Button>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>SIGN UP</Text>
                    </View>
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
});

export default SignUpPage;