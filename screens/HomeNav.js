import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons } from '@expo/vector-icons';
import Screen_21 from '../bottomNav/21';


const BottomTab = createBottomTabNavigator();

const HomeNav = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#F67F00",
                //tabBarInactiveTintColor: isDarkMode ? theme.textColor : '#9999a1',
                tabBarStyle: {
                    //height: 60,
                    //paddingBottom: 5,
                    //paddingTop: 5,
                    //backgroundColor: theme.backgroundColor,
                    //borderTopWidth: 1,
                    //borderTopColor: "red",
                },
                tabBarLabelStyle: {
                    //fontSize: 12,
                    //color: theme.textColor,
                },
            }}
        >
            <BottomTab.Screen
                name="Screen_21"
                component={Screen_21}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={'home-outline'} size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Category"
                component={Screen_21}
                options={{
                    tabBarLabel: 'Category',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name={'apps'} size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TrueView"
                component={Screen_21}
                options={{
                    tabBarLabel: 'TrueView',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={'eye-outline'} size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Message"
                component={Screen_21}
                options={{
                    tabBarLabel: 'Message',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={'chatbubble-ellipses-outline'} size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Cart"
                component={Screen_21}
                options={{
                    tabBarLabel: 'Cart',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={'cart-outline'} size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Account"
                component={Screen_21}
                options={{
                    tabBarLabel: 'Account',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={'person-circle-outline'} size={25} color={color} />
                    ),
                }}
            />

        </BottomTab.Navigator>
    );
};

export default HomeNav