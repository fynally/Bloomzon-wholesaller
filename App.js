import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeNav from './screens/HomeNav';
import Screen_22 from './screens/22';
import Screen_24 from './screens/24';
import Screen_106 from './screens/106';
import Screen_197 from './screens/197';
import Screen_421 from './screens/421';
import Screen_144 from './screens/144';
import Screen_226 from './screens/226';
import Screen_76 from './screens/76';
import Screen_474 from './screens/474';
import Screen_23 from './screens/23';
import Screen_57 from './screens/57';
import Screen_137 from './screens/137';
import Screen_232 from './screens/232';
import Screen_245 from './screens/245';
import Screen_258 from './screens/258';
import Screen_101 from './screens/101';
import MainTabsController from './components/wholesale/MainTabsController';
import Screen_261 from './screens/261';
import Screen_165 from './screens/165';
import Screen_268 from './screens/268';
import { store } from './app/store'
import { Provider } from 'react-redux'



const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'HomeNav'}
        >

          <Stack.Screen
            name="HomeNav"
            component={HomeNav}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_22"
            component={Screen_22}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_23"
            component={Screen_23}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_24"
            component={Screen_24}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_57"
            component={Screen_57}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Screen_76"
            component={Screen_76}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="MainTabsController"
            component={MainTabsController}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_101"
            component={Screen_101}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_106"
            component={Screen_106}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_137"
            component={Screen_137}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_165"
            component={Screen_165}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_197"
            component={Screen_197}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_232"
            component={Screen_232}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_258"
            component={Screen_258}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_261"
            component={Screen_261}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_268"
            component={Screen_268}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_421"
            component={Screen_421}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_144"
            component={Screen_144}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_226"
            component={Screen_226}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Screen_474"
            component={Screen_474}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};

export default App;