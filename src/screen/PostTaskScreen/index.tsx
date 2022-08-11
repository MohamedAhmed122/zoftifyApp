import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getCurrentStatus, pickImage} from '@Shared/utils';
import {createPost, editPost} from '@Store/services/posts/reducer';
import {SelectItem} from '@Shared/types';
import {AppNavigationType, AppParams, AppParamsList} from '@Navigation/type';
import {RouteProp} from '@react-navigation/native';
import {useNavigationHeader} from '@Shared/hooks/useNavigationHeader';
import {ViewPostTask} from './View';

interface Props {
  route: RouteProp<AppParamsList, AppParams.PostTask>;
  navigation: AppNavigationType;
}

export const PostTask: React.FC<Props> = ({navigation, route}) => {
  const editedPost = route.params?.post;

  const dispatch = useDispatch();

  useNavigationHeader(!!editedPost);

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
    <ViewPostTask
      description={description}
      setDescription={setDescription}
      title={title}
      setTitle={setTitle}
      selectStatus={selectStatus}
      image={image}
      onPickImage={onPickImage}
      onRemoveImage={onRemoveImage}
      isDisabled={isDisabled}
      onPressSubmit={onPressSubmit}
      setSelectStatus={setSelectStatus}
    />
  );
};
