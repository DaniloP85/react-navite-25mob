import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Screens
import Dashboard from '../../screens/Dashboard';
import Maps from '../../screens/Maps';

// Types
import {TopBarParamList} from './types';

const Tab = createMaterialTopTabNavigator<TopBarParamList>();

export default function TabRouter() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Roboto',
                },
                tabBarStyle: {
                    backgroundColor: '#FFF',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#ed145b',
                },
            }}>
            <Tab.Screen
                name="Dashboard"
                options={{title: 'GITHUB'}}
                component={Dashboard}
            />
            <Tab.Screen
                name="Maps"
                options={{title: 'MAPA'}}
                component={Maps}
            />
        </Tab.Navigator>
    );
}
