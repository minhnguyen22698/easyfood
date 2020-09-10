import * as React from 'react';
import { Button, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import login from './login'
import foodmenu from './FoodMenu'
import profile from './Profile'
import Icons from 'react-native-vector-icons/Ionicons'


const Drawers = createDrawerNavigator()

export default function App() {
    return (
        // <Icons name={'menu-outline'} size={15} color={'red'}></Icons>
        <NavigationContainer>
            <Drawers.Navigator
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
                }}
            >
                <Drawers.Screen name='login' component={login}
                />
                <Drawers.Screen name='food' component={foodmenu} />
                <Drawers.Screen name='profile' component={profile} />
            </Drawers.Navigator>
        </NavigationContainer>
    );
}


