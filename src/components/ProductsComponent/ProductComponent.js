import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ApiUri } from '../../utils/variables'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native-gesture-handler'
import { Image } from '@rneui/base'
import styles from './ProductComponenStyle'
import { ItemProduct } from './ItemProduct'

export  function ProductComponent() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const productos = async () => {
        try {
            const url = ApiUri + '/catalogo/productos'
            const token = await AsyncStorage.getItem('token')
            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json',
                }
            })
            if (response.status !== 200) {
                throw new Error('Error al obtener los productos')
                
            }
            setLoading(false)
            setProducts(response.data.data)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            await productos()
        }
        fetchData()
    }, [])
   
    return (
        <View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff"  />
            ) : (
                <View>
                    <FlatList
                    style={styles.container}
                        data={products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item})=>(
                           <ItemProduct item={item} />
                        )}
                    />
                </View>
                // products.map((product) => (
                //     <View key={product.id}>
                //         <Text>{product.nombre}</Text>
                //     </View>
                // ))
            )}
        </View>
    )
}