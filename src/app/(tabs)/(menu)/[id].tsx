import { Text, View } from "@/components/Themed";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import products from "@assets/data/products";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { PizzaSize } from "@/types";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

export default function ProductDetailsScreen() {
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const { id } = useLocalSearchParams();

  const currentProduct = products.find((item) => item.id.toString() === id);

  if (!currentProduct) {
    return <Text> Product not found </Text>;
  }

  const addToCart = () => {
    if (!currentProduct) {
      return;
    }
    addItem(currentProduct, selectedSize);
    router.push("/cart");
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: currentProduct?.name }} />
      <Image source={{ uri: currentProduct.image }} style={styles.image} />

      <Text style={styles.sizeText}>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text style={styles.sizeText}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}> ${currentProduct.price}</Text>
      <Button text="Add to cart" onPress={addToCart} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 30,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
