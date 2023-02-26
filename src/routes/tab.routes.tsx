import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '@screens/Home';
import {Restaurants} from '@screens/Restaurants';
import theme from '@theme';
import {RootDrawerParamList} from 'src/@types/routes';
import {Cart} from '@screens/Cart';
import HomeIcon from '../assets/home.svg';
import ListIcon from '../assets/list.svg';
import CartIcon from '../assets/cart.svg';
import UserIcon from '../assets/user.svg';
import {Location} from '@screens/Location';
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator<RootDrawerParamList>();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.oil,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: RFValue(34),
          paddingBottom: RFValue(50),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <HomeIcon width={size} fill={color} focusable={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={Restaurants}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <ListIcon width={size} fill={color} focusable={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <CartIcon width={size} fill={color} focusable={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Location}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <UserIcon width={size} fill={color} focusable={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
