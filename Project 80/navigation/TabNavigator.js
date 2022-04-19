import React from 'react';
import { createBottomTabavigator } from '@react-navigatio/bottom-tabs';
import Ioicons from 'react-native-vector-icons/Ioicons';
import Feed from "../screens/Feed";
import CreatePost from "../screenns/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName = focused
                ? 'book'
                : 'book'
            } else if (route.name === 'CreatePost'){
                iconName = focused ? 'create' : 'create-outlinne';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
            </Tab.Navigator>
    );
}

export default BottomTabNavigator