import { FlatList } from "react-native";
import CategoriesGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from '../data/dummy_data'




function CategoriesScreen({ navigation, })
{



    function renderCategoryItem(itemData)
    {
        function pressHandler()
        {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
                title: itemData.item.title
            })


        }

        return (
            <CategoriesGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
        )
    }


    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}

        />
    )
}

export default CategoriesScreen;