const {View, Text, StyleSheet} = require('react-native');

function Subtitle({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.detailTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 10,
    paddingBottom: 10
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderBottomColor: '#3f2f25',
    borderBottomWidth: 2,
    textAlign: 'center',
    flex: 1,
  },
});
export default Subtitle;
