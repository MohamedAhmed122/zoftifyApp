import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native-image-crop-picker';
import {
  AvoidingKeyboardView,
  CustomButton,
  CustomInput,
  CustomPicker,
  CustomText,
} from '@Shared/common';
import {statusListItems} from '@Shared/assets/data';
import {PhotoPicker} from '@Shared/components';
import {styles} from './styles';
import {pickImage} from '@Shared/utils';

interface Props {}

export const PostTask: React.FC<Props> = () => {
  const [selectStatus, setSelectStatus] = useState<any>();

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [image, setImage] = useState<Image | undefined>(undefined);

  const onPickImage = async () => {
    const value = await pickImage();
    console.log(value);
    value && setImage(value);
  };

  const onRemoveImage = () => setImage(undefined);

  const onPressSubmit = () => {};

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
            />
          </View>
          <View style={styles.inputsContainer}>
            <CustomText fontType="title">Photo</CustomText>
            <PhotoPicker
              uri={image?.path}
              onPickImage={onPickImage}
              onRemoveImage={onRemoveImage}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton title="Submit" onPress={onPressSubmit} />
          </View>
        </>
      </AvoidingKeyboardView>
    </ScrollView>
  );
};
