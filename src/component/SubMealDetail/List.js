import { View, Text, StyleSheet } from "react-native";

function List({data}) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
        <Text key={dataPoint} style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
    listItem : {
        borderRadius: 6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText:{
      textAlign: 'center'  
    }
})

export default List;
