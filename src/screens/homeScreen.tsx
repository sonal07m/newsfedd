import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getList, newsApiList } from '../service';
import News from '../common/news';

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const [list, setList] = useState<Array<any>>([]);

  let NewsList: Array<any> = [];

  useEffect(() => {
    newsApiList.forEach((url: string) => {
      getList(url)
        .then((res: any) => {
          NewsList.push(res);
          setList(NewsList);
        })
    })
  }, [])

  const renderItem = ({ item }: { item: any }) => (
    <News header={item.title + '(' + item.items.length + ')'} onPress={() => { onItemPress(item.title, item) }} />
  );

  const onItemPress = (title: string, item: Object) => {
    navigate("NewsFeedList", { title, item });
  };

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
    fontSize: 18,
  },
});

export default HomeScreen;
