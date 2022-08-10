import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  AvoidingKeyboardView,
  CustomButton,
  CustomInput,
  CustomPicker,
  CustomText,
} from '@Shared/common';
import {statusListItems} from '@Shared/assets/data';
import {PhotoPicker} from '@Shared/components';
import {getCurrentStatus, pickImage} from '@Shared/utils';
import {createPost, editPost} from '@Store/services/posts/reducer';
import {SelectItem, StatusEnum} from '@Shared/types';
import {AppNavigationType, AppParams, AppParamsList} from '@Navigation/type';
import {RouteProp} from '@react-navigation/native';
import {styles} from './styles';

interface Props {
  route: RouteProp<AppParamsList, AppParams.PostTask>;
  navigation: AppNavigationType;
}

export const PostTask: React.FC<Props> = ({navigation, route}) => {
  const editedPost = route.params?.post;
  const dispatch = useDispatch();

  const [selectStatus, setSelectStatus] = useState<SelectItem | undefined>(
    getCurrentStatus(editedPost),
  );

  const [title, setTitle] = useState('' || editedPost?.title);

  const [description, setDescription] = useState('' || editedPost?.desc);

  const [image, setImage] = useState<string>(
    undefined || editedPost?.image || '',
  );

  const isDisabled = !title || !image || !description || !selectStatus;

  const onPickImage = async () => {
    const value = await pickImage();
    value && setImage(value.path);
  };

  const onRemoveImage = () => setImage('');

  const onPressSubmit = () => {
    if (!isDisabled) {
      const post = {
        title,
        desc: description,
        image: image,
        status: selectStatus.value,
      };

      editedPost
        ? dispatch(
            editPost({
              ...post,
              id: editedPost.id,
              createdAt: editedPost.createdAt,
            }),
          )
        : dispatch(createPost(post));

      navigation.navigate(AppParams.Home);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AvoidingKeyboardView>
        <>
          <View style={styles.inputsContainer}>
            <CustomInput
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <CustomPicker
              placeholder="Status"
              items={statusListItems}
              selectedItem={selectStatus}
              setSelectedItem={setSelectStatus}
            />
            <CustomInput
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              inputContainerStyle={styles.descInput}
              multiline
            />
          </View>
          <View style={styles.inputsContainer}>
            <CustomText fontType="title">Photo</CustomText>
            <PhotoPicker
              uri={image}
              onPickImage={onPickImage}
              onRemoveImage={onRemoveImage}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Submit"
              onPress={onPressSubmit}
              isDisabled={isDisabled}
            />
          </View>
        </>
      </AvoidingKeyboardView>
    </ScrollView>
  );
};
