import {StackNavigationProp} from '@react-navigation/stack';
import {Post} from '@Shared/types';

export type NO_PARAMS = undefined;

export enum AppParams {
  Home = 'Home',
  PostTask = 'PostTask',
  PostDetail = 'PostDetail',
}

export type AppParamsList = {
  [AppParams.Home]: NO_PARAMS;
  [AppParams.PostTask]: NO_PARAMS | {post: Post};
  [AppParams.PostDetail]: {id: string};
};
export type AppNavigationType = StackNavigationProp<AppParamsList, AppParams>;
