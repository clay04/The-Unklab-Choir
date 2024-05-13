import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button} from '../../atom';
import { DownloadIcon, PlayIcon } from '../../../assets';

const Header = ({
  label,
  backButton,
  onPress,
  onPressIcon,
  title,
  source,
  labelAlbums1,
  labelAlbums2,
  lableAlbums3,
  textColor='#ffffff',
}) => {
  if (title === 'albums') {
    return (
      <View style={styles.body}>
        <View style={styles.containerAlbums}>
          <View style={[{backgroundColor: 'transparent'}]}>
            {backButton && (
              <Button type="icon-only" icon="icon-back" onPress={onPress} />
            )}
          </View>
        </View>
        <View style={styles.containerWrapperText}>
          <Text style={styles.labelAlbums1}>{labelAlbums1}</Text>
          <Text style={styles.labelAlbums2}>{labelAlbums2}</Text>
        </View>
        <View style={styles.albumsWrapper}>
          <Image source={source} style={styles.albumsPhoto} />
          <Text style={styles.albumsTitleText}>{lableAlbums3}</Text>
          <View style={styles.WrapIcon}>
            <TouchableOpacity onPress={onPressIcon}>
              <PlayIcon style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressIcon}>
              <DownloadIcon style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: 'transparent'}]}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <View>
        <Text style={styles.label(textColor)}>{label}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  body: {
    //flex: 1,
    //alignItems: 'center',
  },
  container: {
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: textColor => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: textColor,
    marginLeft: 26,
  }),
  containerAlbums: {
    marginLeft: 27,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  containerWrapperText: {
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 25,
  },
  labelAlbums1: {
    color: '#A8A8A8',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    textAlign: 'center',
  },
  labelAlbums2: {
    color: '#e1e1e1',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    textAlign: 'center',
  },
  albumsWrapper: {
    alignItems: 'center',
  },
  albumsPhoto: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  albumsTitleText: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: '#ffffff',
    marginTop: 10,
  },
  WrapIcon: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 50,
  }
});
