import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import FeaturedProducts from "@/components/Featured";

export default function HomeScreen() {
  const [selectedOption, setSelectedOption] = useState("SearchBySerial");

  return (
    <ThemedView style={styles.container}>
      {/* Header Section */}
      <SafeAreaView>
        <ThemedView style={styles.header}>
          <ThemedText style={styles.title}>PT IDEMU SISTEM SINERGI</ThemedText>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => console.log("Search pressed")}>
              <Ionicons name="search" size={24} color={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Cart pressed")}>
              <Ionicons name="cart" size={24} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </ThemedView>
      </SafeAreaView>

      {/* navbar */}
      <ThemedView style={styles.navMenu}>
        <TouchableOpacity style={styles.navButton}>
          <ThemedText style={styles.navButtonText}>HOME</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <ThemedText style={styles.navButtonText}>CONTACT US</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <ThemedText style={styles.navButtonText}>LOGIN / REGISTER</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      {/* Main Menu */}
      <ThemedView style={[styles.menu, styles.mainMenu]}>
        <ThemedText style={styles.subtitle}>
          Find The Right Cartridges
        </ThemedText>

        {/* Options Selector */}
        <View style={styles.optionSelector}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === "3StepSearch" && styles.optionButtonActive,
            ]}
            onPress={() => setSelectedOption("3StepSearch")}
          >
            <ThemedText>3 Step Search</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === "SearchBySerial" && styles.optionButtonActive,
            ]}
            onPress={() => setSelectedOption("SearchBySerial")}
          >
            <ThemedText>Search by Serial Number</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Conditional Rendering */}
        {selectedOption === "3StepSearch" ? (
          <View style={styles.selectorContainer}>
            <TouchableOpacity style={styles.selector}>
              <ThemedText style={{ fontSize: RFPercentage(1.5) }}>
                Select Type
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selector}>
              <ThemedText style={{ fontSize: RFPercentage(1.5) }}>
                Select Model
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selector}>
              <ThemedText style={{ fontSize: RFPercentage(1.5) }}>
                Select Brand
              </ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selector}>
              <ThemedText style={{ fontSize: RFPercentage(1.5) }}>
                <Ionicons name="search" size={24} color={"#fff"} />
              </ThemedText>
            </TouchableOpacity>
          </View>
        ) : (
          <TextInput
            placeholder="Enter Serial Number"
            placeholderTextColor="#aaa"
            style={styles.textInput}
          />
        )}
      </ThemedView>

      {/* Featured Products */}
      <FeaturedProducts />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D", // Dark background for a modern look
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#333", // Dark header background
    // borderBottomWidth: 1,
    // borderBottomColor: "#444",
  },
  title: {
    fontSize: RFPercentage(1.5),
    color: "#fff",
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    gap: 20,
  },
  navMenu: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    // backgroundColor: "#222", // Dark background for navigation
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#333", // Dark background for nav buttons
    borderRadius: 8,
  },
  navButtonText: {
    fontSize: RFPercentage(1.2),
    color: "#fff",
    fontWeight: "500",
  },
  menu: {
    paddingVertical: 16,
  },
  mainMenu: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: RFPercentage(2),
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  optionSelector: {
    flexDirection: "row",
    gap: 16,
    marginVertical: 24,
    justifyContent: "center",
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  optionButtonActive: {
    backgroundColor: "#555", // Active button color
  },
  selectorContainer: {
    flexDirection: "row",
    gap: 16,
    // marginVertical: 24,
    justifyContent: "center",
  },
  selector: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#444", // Dark selector background
    borderRadius: 8,
  },
  textInput: {
    width: "60%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 8,
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    fontSize: RFValue(8),
  },
});
