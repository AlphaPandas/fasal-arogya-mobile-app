import React, {Component} from 'react';
import {Text, View, Button, Alert} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

export default class ImageUploadPage extends Component {
    constructor(props) {
        super(props);
        this._handleButtonClick = this._handleButtonClick.bind(this);
    }

    _handleButtonClick() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        })
            .then(image => {
                console.log(image);
                navigator.geolocation.getCurrentPosition((pos) => {
                    console.log("POS", pos);
                    const data = new FormData();
                    data.append('pos', pos);
                    data.append('leafPhoto', {
                        uri: image.path,
                        type: 'image/jpeg', // or photo.type
                        name: 'image'
                    });
                    console.log(data);
                    fetch('https://hackinfinity-image-upload.herokuapp.com/', {
                        method: 'post',
                        body: data,
                        headers : {
                            'Accept': 'application/json',
                            'Content-Type': 'multipart/form-data',
                        }
                    })
                        .then(res => {
                            console.log('URL', res);
                        })
                        .catch(error => {
                            console.log('ERROR');
                            console.log(JSON.stringify(error));
                        });
                    /* Send image to server with location */
                })
            })
            .catch(error => {
                Alert.alert('ERROR: ' + error);
            });
    }

    render(props) {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Text style={{width: '100%', fontSize: 16, padding: 12}}>
                        To know the details of the disease, please capture the image.
                    </Text>
                </View>
                <View style={{flex: 1, padding: 10}}>
                    <Button
                        onPress={this._handleButtonClick}
                        title="Pick an image"
                    />
                </View>
                <View style={{flex: 1, padding: 10}}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Details')}
                        title="Next"
                    />
                </View>
            </View>
        );
    }
}