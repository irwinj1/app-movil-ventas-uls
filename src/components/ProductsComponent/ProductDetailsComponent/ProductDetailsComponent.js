import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ApiUri } from '../../../utils/variables';
import axios from 'axios';
import { Button, Image } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { refreshToken } from '../../../utils/refreshToken';


export function ProductDetailsComponent() {
    const navigate = useNavigation();
    const route = useRoute();
    const { productId } = route.params; 
    const url = ApiUri + '/catalogo/productos/' + productId;
    const [producto, setProducto] = React.useState(null);
    console.log(productId);
    const product = async ()=>{
        try {
            const token = await AsyncStorage.getItem('token')
            if (Date.now>jwtDecode(token).exp) {
                refreshToken()
            }
            const response = await axios.get(url)
            console.log(response.data.data);
            setProducto(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    const agregaCarrito = async () => {
        try {
            let productos = await AsyncStorage.getItem('carrito');
            productos = productos ? JSON.parse(productos) : [];
            productos.push(producto);
            await AsyncStorage.setItem('carrito', JSON.stringify(productos));
        } catch (error) {
            console.error("Error al agregar al carrito:", error);
        }
    };
    useEffect(() => {
       const fetchData = async () => {
           await product();
       };
       fetchData();
    }, []);
    return (
        <View>
       
            <Image
                source={{ uri: producto?.image?.path }}
                style={{ width: 100, height: 100 }}
                PlaceholderContent={<Text>Loading...</Text>}
            />
            <Text>{producto?.nombre}</Text>
            <Text>{producto?.precio}</Text>

            <Button title="Agregar al carrito" onPress={agregaCarrito} />

        </View>
    )
}