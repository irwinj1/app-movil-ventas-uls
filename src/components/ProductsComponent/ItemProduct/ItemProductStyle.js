import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productCard: {
        flex: 1,
        marginBottom: 16,
       
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 16,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    productName: {
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 16,
        
    },
    productPrice: {
        fontSize: 16,
        color: "#888",
      
    },
    productImageContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
        marginRight: 16,

    },
    productDetails: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },
});

export default styles;
