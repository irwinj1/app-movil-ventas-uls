import { View } from "react-native";
import React from "react";
import { Image, Text } from "@rneui/base";
import styles from "./ItemProductStyle";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ItemProduct({ item }) {
  const navigate = useNavigation();

  const detailsComponent = (id) => {
    navigate.navigate("ProductDetails", { productId: id });
  };
  return (
    <TouchableOpacity onPress={() => detailsComponent(item.id)}>
      <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image
          source={{ uri: item.image.path }}
          style={styles.productImage}
          PlaceholderContent={<Text>Loading...</Text>}
        />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.nombre}</Text>
        <Text style={styles.productPrice}>${item.precio}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}
