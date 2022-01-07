import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";
import  NewItem from "../common/newsItem";
import { sortBy } from 'lodash';

const NewsFeedList: React.FC = (props: any) => {
  const route: any = useRoute();
  const [list, setList] = useState<any>(route.params.item.items);
  const [sort, setSort] = useState<boolean>(false);

  useEffect(() => {
    props.navigation.setOptions({
      title: route.params.item.title + ' (' + route.params.item.items.length.toString() + ')',
      headerRight: () =>
        <TouchableOpacity onPress={() => sortByDate()}
          style={{ marginRight: 20 }}>
          <Text style={styles.headerRight}>{sort ? 'undo' : 'sort'}</Text>
        </TouchableOpacity>
    });
  });

  const sortByDate = () => {
    let sortedList2: any = [];
    if (!sort) {
      sortedList2 = sortBy(route.params.item.items, function (dateObj) {
        return dateObj.published;
      });
    } else {
      sortedList2 = route.params.item.items;
    }
    setList(sortedList2);
    setSort(!sort)
  }

  const handleClick = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const renderItem = ({ item }: { item: any }) => (
    <NewItem item={item} onPress={()=>handleClick(item.links[0]?.url)}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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
  headerRight: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});


export default NewsFeedList;
