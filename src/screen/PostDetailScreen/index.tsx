import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {AppNavigationType, AppParams, AppParamsList} from '@Navigation/type';
import {RootState} from '@Store/store';
import {Post} from '@Shared/types';
import {deletePost} from '@Store/services/posts/reducer';

import {ViewPostDetail} from './View';

interface Props {
  route: RouteProp<AppParamsList, AppParams.PostDetail>;
  navigation: AppNavigationType;
}

export const PostDetailScreen: React.FC<Props> = ({route, navigation}) => {
  const {id} = route.params;

  const dispatch = useDispatch();

  const {posts} = useSelector((state: RootState) => state.post);

  const post = posts.find(item => item.id === id) as Post;

  const onDeletePost = () => {
    navigation.goBack();
    dispatch(deletePost(post.id));
  };
  const onNavigateToEditPost = () =>
    navigation.navigate(AppParams.PostTask, {post});

  const onGoBack = () => navigation.goBack();

  return (
    <ViewPostDetail
      post={post}
      onDeletePost={onDeletePost}
      onGoBack={onGoBack}
      onNavigateToEditPost={onNavigateToEditPost}
    />
  );
};
