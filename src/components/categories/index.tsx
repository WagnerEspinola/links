import { Category } from "@/components/category";
import { styles } from "@/styles/categories";
import { categories } from "@/utils/categories";
import { FlatList } from "react-native";

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
