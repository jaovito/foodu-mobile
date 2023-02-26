import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList, RootDrawerParamList} from '../@types/routes';

export function useNavigate() {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList & RootDrawerParamList>>();

  return navigation;
}
