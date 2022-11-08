import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import FeaturedRow from "./FeaturedRow";

const Categories = () => {
  return (
    <View>
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

      {/* Featured Rows */}
      <FeaturedRow
        id="1"
        title="Featured"
        description="Paid placements from our partners"
      />

      {/* Tasty Discounts */}
      <FeaturedRow
        id="2"
        title="Tasty Discounts"
        description="Everyone's been enjoying these juicy discounts"
      />

      {/* Offers Near You */}
      <FeaturedRow
        id="3"
        title="Offers Near You"
        description="Why not explore a restaurant near you?"
      />
    </View>
  );
};

export default Categories;
