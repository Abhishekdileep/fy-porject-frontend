import React from 'react';
import { View, Image, ScrollView ,TouchableOpacity, Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from '../styles';

const renderUploadButton = (uploadImage,image) => (
  <TouchableOpacity onPress={() => uploadImage(image)} style={styles.uploadButton}>
      <Ionicons name="cloud-upload" size={24} color="black" />
      <Text> Upload</Text>
  </TouchableOpacity>
)

const resolveGalleryItemStyle = (selected) => selected ? 
({...styles.galleryImage,...styles.galleryItemHighlighted}):
(styles.galleryImage)

const renderGalleryItem = (image,toggleSelectedImage,uploadImage,isScanning) => 
<TouchableOpacity disabled={isScanning}  key={image.uri} onPress={() => toggleSelectedImage(image)}>
  {
      image.selected && 
      !isScanning &&
      renderUploadButton(uploadImage,image)
  }
  <View style={styles.galleryImageContainer}>
      <Image source={{ uri: image.uri }} style={resolveGalleryItemStyle(image.selected)} />
  </View>
</TouchableOpacity>

export default ({captures=[],toggleSelectedImage,uploadImage,isScanning}) => (
    <>
      <ScrollView 
          horizontal={true}
          style={[styles.bottomToolbar, styles.galleryContainer]} 
      >
        {
          captures.map((image) => renderGalleryItem(image,toggleSelectedImage,uploadImage,isScanning))
        }
      </ScrollView>
    </>
);