import React, {useState} from 'react';
import {ImageProps} from 'react-native';
import {Image} from './avatar.styles';
import defaultChefImg from '../../../assets/defaultChef.png';

export const Avatar = (props: ImageProps) => {
  const [imageError, setImageError] = useState(false);

  function handleSetDefaultImage() {
    setImageError(true);
  }

  return (
    <Image
      resizeMode="cover"
      {...props}
      source={imageError ? defaultChefImg : props.source}
      onError={handleSetDefaultImage}
    />
  );
};
