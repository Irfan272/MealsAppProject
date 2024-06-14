import CategoryGridTile from '../component/CategoryGridTile';
import {FlatList} from 'react-native';

const {CATEGORIES} = require('../data/dumy-data');

function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
        navigation.navigate('MealsOver', {
            categoryId: itemData.item.id,
        });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
