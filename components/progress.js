import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

type State = { animating: boolean; };
type Timer = number;

class Progress extends Component {
  /**
   * Optional Flowtype state and timer types
   */
  state: State;
  _timer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 4500);
  }

  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={{height: 80,  alignItems: 'center',
        justifyContent: 'center',
        padding: 8}}
        size="large"
      />
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

export default  Progress