import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Hr from 'react-native-hr-component';

import PropTypes from 'prop-types';

const white = '#FFF';
const black = '#000';
const gray = '#444';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
  },
  line: {
    fontWeight: 'bold',
  },
});

const Post = ({ data }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
      <Hr style={styles.line} text="" lineColor={gray} />
    </View>
    <Text>{data.content}</Text>
  </View>
);

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
