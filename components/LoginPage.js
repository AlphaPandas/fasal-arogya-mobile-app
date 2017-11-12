import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';

import login from '../services/login';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this._handleButtonPress = this._handleButtonPress.bind(this);
    }

    _handleButtonPress() {
        const username = this.state.username;
        const password = this.state.password;
        const result = login({username, password});
        if (result) {
            this.props.onSuccessfulLogin();
        }
        else {
            Alert.alert('Login Failed', 'Invalid username or password.');
        }
    }

    render(props) {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, padding: 20}}>
                    <Text style={{width: '100%', height: 40, fontSize: 18, textAlign: 'center'}}>Please log in to
                        continue</Text>
                </View>
                <View style={{flex: 1, padding: 20}}>
                    <Text style={{fontSize: 16}}>Username</Text>
                    <TextInput
                        style={{height: 50, fontSize: 16}}
                        onChangeText={(text) => this.setState({username: text})}
                    />
                </View>
                <View style={{flex: 1, padding: 20}}>
                    <Text style={{fontSize: 16}}>Password</Text>
                    <TextInput
                        style={{height: 50, fontSize: 16}}
                        onChangeText={(text) => this.setState({password: text})}
                        secureTextEntry={true}
                    />
                </View>
                <View style={{flex: 3}}/>
                <Button
                    onPress={() => this.props.navigation.navigate('ImageUpload')}
                    title="Next"
                    style={{fontSize: 16}}
                >
                    NEXT
                </Button>
            </View>
        );
    }
}