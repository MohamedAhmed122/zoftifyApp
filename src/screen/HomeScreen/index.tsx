import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import {AppNavigationType, AppParams} from '@Navigation/type';
import {CustomButton, Empty} from '@Shared/common';
import {Post} from '@Shared/components';
import {useSelector} from 'react-redux';
import {Post as PostType} from '@Shared/types';
import {styles} from './styles';
import {RootState} from '@Store/store';

interface Props {
  navigation: AppNavigationType;
}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {posts} = useSelector((state: RootState) => state.post);

  const onNavigateToCreateNewPost = () =>
    navigation.navigate(AppParams.PostTask);

  const onNavigateToPostDetail = (id: string) =>
    navigation.navigate(AppParams.PostDetail, {id});

  const renderPost: ListRenderItem<PostType> = props => (
    <Post
      item={props.item}
      onPress={() => onNavigateToPostDetail(props.item.id)}
    />
  );

  return (
    <>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Empty />}
        renderItem={renderPost}
        // ListFooterComponentStyle={styles.footer}
        // ListFooterComponent={
        // }
      />
      <View style={styles.footer}>
        <CustomButton title="New Post" onPress={onNavigateToCreateNewPost} />
      </View>
    </>
  );
};
