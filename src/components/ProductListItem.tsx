import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

import { Text, View } from "@components/Themed";
import Colors from "@constants/Colors";
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

export const defaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png";

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    // <Link href={{ pathname: "/menu/[id]", params: { id: product.id } }} asChild>
    // <Link href={`/(tabs)/menu/${product.id}`} asChild>
    <Link href={`/(menu)/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
    // justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
