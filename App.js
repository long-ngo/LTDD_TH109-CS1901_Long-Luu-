import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './views/screens/OnBoardScreen';
import HomeScreen from './views/screens/HomeScreen';
import BottomNavigator from './views/navigation/BottomNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnBoard" component={OnBoardScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
