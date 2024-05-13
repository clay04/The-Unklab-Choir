import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const flyers = [
  {
    id: 1,
    title: 'Flyer 1',
    description: 'Deskripsi Flyer 1',
    image: require('../../../assets/image/1.png'),
  },
  {
    id: 2,
    title: 'Flyer 2',
    description: 'Deskripsi Flyer 2',
    image: require('../../../assets/image/2.png'),
  },
  {
    id: 3,
    title: 'Flyer 3',
    description: 'Deskripsi Flyer 3',
    image: require('../../../assets/image/UnceasingPraise.png'),
  },
];

const FlyerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === flyers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Ubah interval sesuai keinginan (dalam milidetik)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={flyers}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event) => {
        const newIndex = Math.floor(
          event.nativeEvent.contentOffset.x / screenWidth
        );
        setCurrentIndex(newIndex);
      }}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 170,
    borderRadius: 15,
  },
});

export default FlyerSlider;
