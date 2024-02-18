import { Text, View } from "@/components/Themed";
import { StatusBar } from "expo-status-bar";
import { FlatList, Platform } from "react-native";
import { useCart } from "@/context/CartContext";
import Button from "@/components/Button";
import CartListItem from "@/components/CartListItem";

export default function CartScreen() {
  const { items, total } = useCart();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />

      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
        Total: ${total}
      </Text>
      <Button onPress={() => {}} text="Checkout" />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
