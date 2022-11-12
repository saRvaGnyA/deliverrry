import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestroCard from "./RestroCard";

const FeaturedRow = ({ id, title, description }) => {
  const [restros, setRestros] = useState([]);

  const getInitialData = async () => {
    const response = await fetch(
      `https://abdsqnsk.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'featured'%20%26%26%20_id%20%3D%3D%20%24id%5D%20%7B%0A%20%20...%2C%0A%20%20restaurants%5B%5D%20-%3E%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20dishes%5B%5D%20-%3E%2C%0A%20%20%20%20type%20-%3E%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D%5B0%5D&%24id=%22${id}%22`
    );
    const data = await response.json();
    setRestros(data.result.restaurants);
  };

  useEffect(() => {
    getInitialData();
  }, [id]);

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
        {restros?.map((restro) => {
          return (
            <RestroCard
              key={restro._id}
              id={restro._id}
              imgUrl={restro.imageUrl}
              title={restro.name}
              rating={restro.rating}
              genre={restro.type?.name}
              address={restro.address}
              short_description={restro.short_description}
              dishes={restro.dishes}
              long={restro.long}
              lat={restro.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
