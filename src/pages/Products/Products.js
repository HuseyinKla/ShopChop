import React from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, Text } from 'react-native'
import Config from "react-native-config";
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';


const Products = ({navigation}) => {

    const {error, loading, data} = useFetch(Config.API_URL)
    const handleSelect = id => {
        navigation.navigate('DetailScreen', {id})
    }


    const renderProducts = ({item}) => <ProductCard product={item} onSelect={()=> handleSelect(item.id)}/>

    if(loading) return <ActivityIndicator size={'large'}/>
    if(error) return <Text>{error}</Text>
    return(
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProducts}/>
        </SafeAreaView>
    )
}

export default Products