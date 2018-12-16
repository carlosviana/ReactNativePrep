import './config/Reactotronconfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Post from '~/components/Posts';

const bgColor = '#F78181';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random,
        title: 'Aprendendo React Native',
        author: 'Carlos Viana',
        content:
          'Lorem ipsum phasellus tempus quisque vestibulum nam egestas, aenean bibendum fusce aenean consequat habitasse faucibus, nec phasellus volutpat dictum semper nulla. sagittis quam dictum vivamus himenaeos id massa, etiam eros nec phasellus rhoncus adipiscing, urna nulla at habitasse enim. ',
      },
      {
        id: Math.random,
        title: 'Aprendendo React Native',
        author: 'Carlos Viana',
        content:
          'Lorem ipsum phasellus tempus quisque vestibulum nam egestas, aenean bibendum fusce aenean consequat habitasse faucibus, nec phasellus volutpat dictum semper nulla. sagittis quam dictum vivamus himenaeos id massa, etiam eros nec phasellus rhoncus adipiscing, urna nulla at habitasse enim. ',
      },
      {
        id: Math.random,
        title: 'Aprendendo React Native',
        author: 'Carlos Viana',
        content:
          'Lorem ipsum phasellus tempus quisque vestibulum nam egestas, aenean bibendum fusce aenean consequat habitasse faucibus, nec phasellus volutpat dictum semper nulla. sagittis quam dictum vivamus himenaeos id massa, etiam eros nec phasellus rhoncus adipiscing, urna nulla at habitasse enim. ',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
