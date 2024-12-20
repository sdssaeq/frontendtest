import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ImageBackground } from "react-native";

// Product data
const products = [
  {
    id: "1",
    name: "HP 61 Cartridge",
    price: "$10.49",
    discountedPrice: "$5.99",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/346154705/IY/CK/DJ/3082651/inkjet-printer-cartridge.png",
  },
  {
    id: "2",
    name: "HP 62 Cartridge",
    price: "$36.45",
    discountedPrice: "$36.45",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/346154705/IY/CK/DJ/3082651/inkjet-printer-cartridge.png",
  },
  {
    id: "3",
    name: "HP 63 Cartridge",
    price: "$9.49",
    discountedPrice: "$89.99",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/346154705/IY/CK/DJ/3082651/inkjet-printer-cartridge.png",
  },
];

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the next product
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  // Handle the previous product
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Get the current product
  const currentProduct = products[currentIndex];

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <ThemedText style={styles.title}>Featured Product</ThemedText>

        {/* Display the current product */}
        <View style={styles.cardContainer}>
          {/* Navigation Arrows */}
          <TouchableOpacity
            onPress={handlePrev}
            style={[styles.arrowButton, styles.leftArrow]}
          >
            <Text style={styles.arrowText}>←</Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <ImageBackground
              source={{ uri: currentProduct.imageUrl }}
              style={styles.productImageBackground}
              resizeMode="cover"
            >
              <View style={styles.cardContent}>
                <ThemedText style={styles.productName}>
                  {currentProduct.name}
                </ThemedText>
                <ThemedText style={styles.productPrice}>
                  {currentProduct.discountedPrice}
                </ThemedText>
                <TouchableOpacity style={styles.addButton}>
                  <ThemedText style={styles.addButtonText}>
                    ADD TO CART
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* Navigation Arrow */}
          <TouchableOpacity
            onPress={handleNext}
            style={[styles.arrowButton, styles.rightArrow]}
          >
            <Text style={styles.arrowText}>→</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: RFPercentage(2),
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 16,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centers content horizontally
    // width: "80%", // Adjust the width of the entire container
  },
  card: {
    borderRadius: 16, // Rounded corners for the card
    alignItems: "center",
    // width: Dimensions.get("window").width * 0.6, // Card width
    overflow: "hidden", // Prevent image overflow
    height: 250, // Height of the card
    // marginHorizontal: 10,
  },
  productImageBackground: {
    flex: 1,
    justifyContent: "flex-end", // Align content at the bottom of the card
    borderRadius: 16, // Rounded corners for the image
  },
  cardContent: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    width: "100%",
    padding: 12,
  },
  productName: {
    fontSize: RFValue(12),
    color: "#fff",
    textAlign: "center",
    marginTop: 8,
  },
  productPrice: {
    // fontSize: RFValue(8),
    // color: "#fff",
    // textAlign: "center",
    // marginVertical: 4,
    // textDecorationLine: "line-through",
  },
  addButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: RFValue(8),
    fontWeight: "bold",
  },
  navigation: {
    justifyContent: "center", // Centers the arrows vertically
  },
  arrowButton: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    color: "#fff",
    fontSize: RFValue(10),
  },
  leftArrow: {
    position: "absolute",
    left: -80, // Adjusts the arrow position to the left of the card
  },
  rightArrow: {
    position: "absolute",
    right: -80, // Adjusts the arrow position to the right of the card
  },
});
