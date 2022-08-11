import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {CustomBadge, CustomButton, CustomText} from '@Shared/common';
import {Post, PostStatus} from '@Shared/types';

import {styles} from './styles';
import {COLORS} from '@Shared/style';

interface Props {
  post: Post;
  onGoBack(): void;
  onDeletePost(): void;
  onNavigateToEditPost(): void;
}

export const ViewPostDetail: React.FC<Props> = ({
  post,
  onGoBack,
  onDeletePost,
  onNavigateToEditPost,
}) => {
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
          onPress={onGoBack}
        />
      </View>
      <View style={styles.conatiner}>
        <View>
          <View style={styles.titleContainer}>
            <CustomText fontType="title">{post.title}</CustomText>
            <CustomBadge
              badgeType={post.status}
              title={
                post.status === PostStatus.IsDrafted ? 'Draft' : 'Published'
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
