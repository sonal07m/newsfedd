import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import HTML from 'react-native-render-html';

import { getFormattedDate } from '../service';

interface NewItemProps {
  item: {
    title: string;
    description: string;
    published: string;
  };
  onPress: () => void;
}

const NewItem: React.FC<NewItemProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{getFormattedDate(item.published)}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <HTML html={item.description} containerStyle={styles.htmlContainer} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  htmlContainer: { 
    height:35, 
    overflow: "hidden"
  }
});

export default NewItem;
