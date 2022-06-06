import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppoinmentDetails";
import { AppointmentCreate } from "../screens/AppoinmentCreate";


const Stack = createStackNavigator()

export function AuthRoutes (){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: 'transparent',
            }
        }}
       >
           <Stack.Screen name='Home' component={Home}/>
           <Stack.Screen name='AppointmentDetails' component={AppointmentDetails}/>
           <Stack.Screen name='AppointmentCreate' component={AppointmentCreate}/>


        </Stack.Navigator>
    )

}