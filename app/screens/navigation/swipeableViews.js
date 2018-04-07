import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SwipeableViews from 'react-swipeable-views-native';
// There is another version using the scroll component instead of animated.
// I'm unsure which one give the best UX. Please give us some feedback.
// import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll';

const styles = StyleSheet.create({
  slideContainer: {
    height: 100,
  },
  slide: {
    padding: 15,
    height: 100,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

class LoanRequest extends Component {
    render() {
        return (
          <SwipeableViews style={styles.slideContainer}>
            <View style={[styles.slide]}>
              <Text style={styles.text}>
                slide n°1
              </Text>
            </View>
            <View style={[styles.slide]}>
              <Text style={styles.text}>
                slide n°2
              </Text>
            </View>
            <View style={[styles.slide]}>
              <Text style={styles.text}>
                slide n°3
              </Text>
            </View>
          </SwipeableViews>
        );
    }
}

export default LoanRequest;
