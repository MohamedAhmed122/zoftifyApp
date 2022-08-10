import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {AppNavigationType, AppParams, AppParamsList} from '@Navigation/type';
import {RootState} from '@Store/store';
import {Post, StatusEnum} from '@Shared/types';
import {CustomBadge, CustomButton, CustomText} from '@Shared/common';
import {deletePost} from '@Store/services/posts/reducer';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {COLORS} from '@Shared/style';

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
  const onNavigateToEditPost = () => {
    console.log('pressed');
    navigation.navigate(AppParams.PostTask, {post});
  };
  return (
    <ScrollView>
      <Image
        source={{uri: post.image}}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.icon}>
        <Icon
          name="closecircle"
          color={COLORS.textSecondary}
          size={24}
          onPress={navigation.goBack}
        />
      </View>
      <View style={styles.conatiner}>
        <View>
          <View style={styles.titleContainer}>
            <CustomText fontType="title">{post.title}</CustomText>
            <CustomBadge
              badgeType={post.status}
              title={
                post.status === StatusEnum.IsDrafted ? 'Draft' : 'Published'
              }
            />
          </View>
          <CustomText fontType="body">{post.desc}</CustomText>
        </View>
        <View>
          <CustomButton
            title="Delete Post"
            buttonContainerStyle={styles.delete}
            onPress={onDeletePost}
          />
          <CustomButton
            title="Edit Post"
            onPress={onNavigateToEditPost}
            buttonContainerStyle={styles.editBtn}
          />
        </View>
      </View>
    </ScrollView>
  );
};
