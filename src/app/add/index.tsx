import { Categories } from "@/components/categories";
import { styles } from "@/styles/add";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            router.canGoBack() ? router.back() : router.replace("/index")
          }
        >
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories />
    </View>
  );
}
