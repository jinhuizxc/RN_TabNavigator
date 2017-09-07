import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class ChatScreen extends React.Component {

    static navigationOptions = ({navigation})=>({
        // title: 'Chat with ${navigation.state.params.user}',
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}