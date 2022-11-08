import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard
        imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;
