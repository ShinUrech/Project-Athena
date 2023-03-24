import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { SwipeScreen } from "../screens/swipeScreen.js"
import {QuestionsScreen } from "../screens/questions.js"
import { DashboardScreen } from "../screens/dashboard.js"
import { FriendsInterationScreen } from "../screens/friendsInteraction.js"
import { NavigationContainer } from "@react-navigation/native"
import Ionicons from "@expo/vector-icons/Ionicons"
import {View,SafeAreaView, StatusBar} from 'react-native'

export const MainTabs = () => {
    const Tab = createMaterialBottomTabNavigator()
    return(
        
        <NavigationContainer>
           
            <Tab.Navigator 

            screenOptions={({route}) => ({
               
                
                tabBarAccessibilityLabel:false,
                
                tabBarLabel:false,
                tabBarIcon: ({ focused}) => {
                    
                    let iconName, iconSize, iconColor;
                    if (route.name === 'Swiper') {
                        iconName = "home-outline";
                    }
                    else if(route.name === 'Questions') {
                        iconName = "star-outline";
                    }
                    else if(route.name === 'Dashboard'){
                        iconName = "grid-outline";
                    }
                    else if(route.name === 'FriendsInteraction'){
                        iconName = "globe-outline";
                    }
                    iconSize = focused ? 35 : 30;
                    iconColor = "black"
                    
                    return(
                        <View style={{marginBottom:-100, paddingVertical:10}}>
                            <Ionicons name={iconName} size={iconSize} color={iconColor} />
                        </View>
                    );
                }
            })}>
                <Tab.Screen name="Swiper" component={SwipeScreen}/>
                <Tab.Screen name="Questions" component={QuestionsScreen}/>
                <Tab.Screen name="Dashboard" component={DashboardScreen}/>
                <Tab.Screen name="FriendsInteraction" component={FriendsInterationScreen}/>
            </Tab.Navigator>
    </NavigationContainer>
    )
}


