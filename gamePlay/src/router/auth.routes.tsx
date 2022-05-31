import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { theme } from "../global/styles/theme";
import { AppointmentDetails } from "../screens/AppoinmentDetails";
import { AppointmentCreate } from "../screens/AppoinmentCreate";


const Stack = createStackNavigator()

export function AuthRoutes (){
    return(
        <Stack.Navigator
        screenOptions={{
            headerMode: 'none',
            cardStyle:{
                backgroundColor: theme.colors.secondary90,
            }
        }}
       >
           {/* <Stack.Screen name='Signin' component={SignIn}/> */}
           <Stack.Screen name='Home' component={Home}/>
           <Stack.Screen name='AppointmentDetails' component={AppointmentDetails}/>
           <Stack.Screen name='AppointmentCreate' component={AppointmentCreate}/>


        </Stack.Navigator>
    )

}