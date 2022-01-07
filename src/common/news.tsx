import React from "react";
import { StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";

interface NewsProps {
    header: string;
    onPress: () => void;
}

const NewsItem: React.FC<NewsProps> = ({
    header,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Text style={styles.title}>{header}</Text>
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
});

export default NewsItem;
