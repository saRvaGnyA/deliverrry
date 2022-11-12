import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getInitialData = async () => {
    const response = await fetch(
      "https://abdsqnsk.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'category'%5D%20%7B%0A%20%20...%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%7D"
    );
    const data = await response.json();
    setCategories(data.result);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <View>
      <ScrollView
        contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* Category Card */}
        {categories?.map((category) => {
          return (
            <CategoryCard
              key={category._id}
              imgUrl={category.imageUrl}
              title={category.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
