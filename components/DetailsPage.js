import React, {Component} from 'react';
import {Text, View, Image, Button} from 'react-native';

export default class DetailsPage extends Component {
    render(props) {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, paddingTop: 10}}>
                    <Text style={{fontSize: 24, width: '100%', textAlign: 'center'}}>
                        Identified category
                    </Text>
                </View>
                <View style={{flex: 2}}>
                    <Text style={{fontSize: 36, fontWeight: 'bold', width: '100%', textAlign: 'center'}}>
                        Angular Leaf Spot
                    </Text>
                </View>
                <View style={{flex: 5}}>
                    <Image
                        source={{uri: "https://facebook.github.io/react/img/logo_og.png"}}
                        style={{width: 250, height: 250}}
                    />
                </View>
                <Button
                    onPress={() => this.props.navigation.navigate('ImageUpload')}
                    title="View similar images"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('ImageUpload')}
                    title="Check another"
                />
            </View>
        );
    }
}