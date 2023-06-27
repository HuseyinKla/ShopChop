import React from 'react'
import { NavigationContainer  } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Detail from './pages/Detail';
import Products from './pages/Products';


const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ProductsScreen' component={Products} options={{
          title: 'Dükkan',
          headerStyle: {backgroundColor: '#64b5f6'},
          headerTitleStyle: {color: 'white'},          
        }}/>
        <Stack.Screen name='DetailScreen' component={Detail} options={{
          title: 'Detay',
          headerStyle: {backgroundColor: '#64b5f6'},
          headerTitleStyle: {color: 'white'},  
          headerTintColor: 'white',
                  
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App