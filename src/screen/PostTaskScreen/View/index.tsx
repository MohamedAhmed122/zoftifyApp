import {ScrollView, View} from 'react-native';
import React from 'react';
import {
  AvoidingKeyboardView,
  CustomButton,
  CustomInput,
  CustomPicker,
  CustomText,
} from '@Shared/common';
import {PhotoPicker} from '@Shared/components';
import {statusListItems} from '@Shared/assets/data';

import {styles} from './styles';
import {SelectItem} from '@Shared/types';

interface Props {
  title?: string;
  image: string;
  isDisabled: boolean;
  description?: string;
  selectStatus?: SelectItem;
  onPickImage(): void;
  onRemoveImage(): void;
  onPressSubmit(): void;
  setTitle(str: string): void;
  setDescription(str: string): void;
  setSelectStatus(item?: SelectItem): void;
}

export const ViewPostTask: React.FC<Props> = ({
  image,
  title,
  isDisabled,
  description,
  selectStatus,
  setTitle,
  onPickImage,
  onRemoveImage,
  onPressSubmit,
  setDescription,
  setSelectStatus,
}) => {
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
