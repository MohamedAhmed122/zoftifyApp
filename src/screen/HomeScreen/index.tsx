import {FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {AppNavigationType, AppParams} from '@Navigation/type';
import {CustomButton, Empty} from '@Shared/common';
import {Post} from '@Shared/components';
import {posts} from '@Shared/assets/data';
import {Post as PostType} from '@Shared/types';

import {styles} from './styles';

interface Props {
  navigation: AppNavigationType;
}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const onNavigateToCreateNewPost = () =>
    navigation.navigate(AppParams.CreatePost);

  const renderPost: ListRenderItem<PostType> = props => (
    <Post item={props.item} />
  );

  return (
    <FlatList
      data={posts}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={item => item.id}
      ListEmptyComponent={<Empty />}
      renderItem={renderPost}
      ListFooterComponentStyle={styles.footer}
      ListFooterComponent={
        <CustomButton title="New Post" onPress={onNavigateToCreateNewPost} />
      }
    />
  );
};
