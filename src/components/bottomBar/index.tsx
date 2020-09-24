import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {images} from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  const renderIcon = (label: string, isFocused: boolean) => {
    if (label === 'Create') {
      return <Image source={images.createButton} style={styles.centerButton} />;
    } else {
      return (
        <View style={styles.anotherButton}>
          <Icon
            color={isFocused ? 'blue' : 'black'}
            name={convertLabelToNameToRenderIcon(label)}
            size={25}
          />
          <Text style={isFocused ? styles.focusedStyle : styles.unFocusedStyle}>
            {label}
          </Text>
        </View>
      );
    }
  };

  const convertLabelToNameToRenderIcon = (label: string) => {
    switch (label) {
      case 'Home':
        return 'home-outline';
      case 'Important':
        return 'alert-outline';
      case 'Trash':
        return 'trash-outline';
      case 'Tasks':
        return 'grid-outline';
      default:
        return '';
    }
  };

  return (
    <ImageBackground
      source={images.bottomBarImage}
      resizeMode={'stretch'}
      style={styles.bottomBarContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.itemContainer}>
            <View style={styles.eachItemContainer}>
              {renderIcon(label, isFocused)}
            </View>
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  centerButton: {height: 80, width: 80, marginTop: 10},
  anotherButton: {bottom: -15, justifyContent: 'center', alignItems: 'center'},
  focusedStyle: {color: 'blue'},
  unFocusedStyle: {color: 'black'},
  bottomBarContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    justifyContent: 'space-around',
  },
  itemContainer: {flex: 1, justifyContent: 'center'},
  eachItemContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});
