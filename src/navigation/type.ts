import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum AppParams {
  Home = 'Home',
  CreatePost = 'CreatePost',
}

export type AppParamsList = {
  [AppParams.Home]: NO_PARAMS;
  [AppParams.CreatePost]:NO_PARAMS
};
export type AppNavigationType = StackNavigationProp<AppParamsList, AppParams>;