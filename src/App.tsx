import React from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import Home from './components/Home';
import StackDemo from './components/StackDemo';
// import Home from './components/Cao';

class App extends React.Component {
  animatedValue = new Animated.Value(0);


  componentDidMount() {
    this.animateBackgroundColor();
  }

  animateBackgroundColor = () => {
    Animated.loop(
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 30000,
        useNativeDriver: false,
      }),
    ).start();
  };

  render() {
    const backgroundColor = this.animatedValue.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: ["#E6DFC2", "#DEB887", "#E6DFC2"],
    });

    return (
      <Animated.View style={{ ...styles.page, backgroundColor }}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
        <Home />
        {/* <StackDemo /> */}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;