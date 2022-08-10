import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import {SelectItem} from '@Shared/types';
import {PickerItem} from './PickerItem';
import {style} from './styles';
import {CustomText} from '../CustomText';

const {pickerStyle: styles} = style;

interface CustomPickerProps {
  items: SelectItem[];
  selectedItem?: SelectItem;
  setSelectedItem: (item: SelectItem) => void;
  placeholder: string;
}

export const CustomPicker: React.FC<CustomPickerProps> = ({
  items,
  selectedItem,
  setSelectedItem,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <CustomText
            fontType={selectedItem?.label ? 'body' : 'subtitle'}
            textStyle={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </CustomText>
          <Icon name="chevron-down" size={24} color="gray" />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            style={styles.listContainer}
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                color={item.color}
                textColor={item.textColor}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};
