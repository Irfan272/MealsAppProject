import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({title, color, onPress}) {
//  const navigation = useNavigation();

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [styles.button, 
        pressed ? styles.buttonPressed : null]}
        onPress={onPress}
        >

        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: windowWidth < 380 ? 8 : 16,
    height: windowHeight < 380 ? 75 : 150,
    borderRadius: 8,
    elevation: 4,

    // untuk IOS
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed:{
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: windowWidth < 380 ? 8 : 16,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CategoryGridTile;
