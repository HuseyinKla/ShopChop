import React from 'react'
import { Image, SafeAreaView, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import styles from './Detail.style'


const Detail = ({route}) =>{

    const {id} = route.params
    const {error, loading, data} = useFetch(Config.API_URL+"/"+id)

    if(loading) return <ActivityIndicator size={'large'}/>
    if(error) return <Text>{error}</Text>

    return(
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: data.image}}/>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.desc}>{data.description}</Text>
                    <Text style={styles.price}>{data.price} ₺</Text>
                </View>
            </View>
        </ScrollView>

    )
}

export default Detail