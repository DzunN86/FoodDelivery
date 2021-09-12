/* eslint-disable react-native/no-inline-styles */
import {TabActions} from '@react-navigation/routers';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {setSelectedTab} from '../stores/tab/tabActions';

import {Home, Search, CartTab, Favourite, Notification} from '../screens';

import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...drawerAnimationStyle,
      }}>
      {/* Header */}

      {/* Content */}

      <Text>MainLayout</Text>
      {/* Footer */}
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
