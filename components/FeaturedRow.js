import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestroCard from "./RestroCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestroCard
          id={1}
          imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
          title="McDonalds"
          rating="4.5"
          genre="Burger"
          address="XYZ Street, Mumbai"
          short_description="Get burgers and fries here"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestroCard
          id={1}
          imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
          title="McDonalds"
          rating="4.5"
          genre="Burger"
          address="XYZ Street, Mumbai"
          short_description="Get burgers and fries here"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestroCard
          id={1}
          imgUrl="https://res.cloudinary.com/dn6vz8exv/image/upload/v1667887658/deliverrry/sushi-place_a8nhul.jpg"
          title="McDonalds"
          rating="4.5"
          genre="Burger"
          address="XYZ Street, Mumbai"
          short_description="Get burgers and fries here"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
