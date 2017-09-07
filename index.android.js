/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/**
 *
 * TabNavigator属性介绍
 * screen：和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。
 * navigationOptions：配置TabNavigator的一些属性

 title：标题，会同时设置导航条和标签栏的title

 tabBarVisible：是否隐藏标签栏。默认不隐藏(true)

 tabBarIcon：设置标签栏的图标。需要给每个都设置

 tabBarLabel：设置标签栏的title。推荐

 导航栏配置

 tabBarPosition：设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）

 swipeEnabled：是否允许在标签之间进行滑动

 animationEnabled：是否在更改标签时显示动画

 lazy：是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true

 trueinitialRouteName： 设置默认的页面组件

 backBehavior：按 back 键是否跳转到第一个Tab(首页)， none 为不跳转

 tabBarOptions：配置标签栏的一些属性iOS属性

 activeTintColor：label和icon的前景色 活跃状态下

 activeBackgroundColor：label和icon的背景色 活跃状态下

 inactiveTintColor：label和icon的前景色 不活跃状态下

 inactiveBackgroundColor：label和icon的背景色 不活跃状态下

 showLabel：是否显示label，默认开启 style：tabbar的样式

 labelStyle：label的样式安卓属性

 activeTintColor：label和icon的前景色 活跃状态下

 inactiveTintColor：label和icon的前景色 不活跃状态下

 showIcon：是否显示图标，默认关闭

 showLabel：是否显示label，默认开启 style：tabbar的样式

 labelStyle：label的样式 upperCaseLabel：是否使标签大写，默认为true

 pressColor：material涟漪效果的颜色（安卓版本需要大于5.0）

 pressOpacity：按压标签的透明度变化（安卓版本需要小于5.0）

 scrollEnabled：是否启用可滚动选项卡 tabStyle：tab的样式

 indicatorStyle：标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题

 labelStyle：label的样式

 iconStyle：图标样式
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {TabNavigator, StackNavigator} from "react-navigation";
import ChatScreen from './app/ChatScreen'
import Chat1Screen from './app/Chat1Screen'
class RecentChatsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>

                <Text>List of recent chats</Text>
                <Button onPress={()=>navigate('Chat',{user:'Lucy'})}
                        title="Chat with Lucy">
                </Button>
            </View>
        )
    }
}

class AllContactsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button onPress={()=>navigate('Chat1',{user:'Jane'})}
                        title="Chat with Jane">
                </Button>
            </View>
            )

    }
}


const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};
const SimpleApp = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Chat: { screen: ChatScreen },
    Chat1: { screen: Chat1Screen },
});


AppRegistry.registerComponent('RN_TabNavigator', () => SimpleApp);
