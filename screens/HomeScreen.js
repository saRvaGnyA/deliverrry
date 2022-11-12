import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const fetchInitialData = async () => {
    const response = await fetch(
      "https://abdsqnsk.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'featured'%5D%20%7B%0A%20%20...%2C%0A%20%20restaurants%5B%5D%20-%3E%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20dishes%5B%5D%20-%3E%0A%20%20%7D%0A%7D"
    );
    const data = await response.json();
    setFeaturedCategories(data.result);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 pt-2">
      {/* Header */}
      <View className="flex flex-row pb-3 items-center px-2 space-x-2">
        <Image
          source={{
            uri: "https://res.cloudinary.com/dn6vz8exv/image/upload/v1667195755/deliverrry/Capture-removebg-preview_nojpse.png",
          }}
          className="h-7 w-7 bg-gray-300 p-4 ml-2 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center pb-2 mx-4 space-x-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100 flex-1">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories?.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
