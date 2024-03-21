import { View, StyleSheet, FlatList } from "react-native";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { InputComponent } from "@/components/InputComponent";
import { ItemComponent } from "@/components/ItemComponent";
import { useState } from "react";
import { Link } from "expo-router";

export default function MenuPage() {
  const { w } = useResponsiveScreen();
  const [search, setSearch] = useState();
  const [error, setError] = useState();

  const menuItems = [
    {
      id: 1,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Fried Chicken",
      price: "170",
    },
    {
      id: 2,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Fried Fingers",
      price: "500",
    },
    {
      id: 3,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Fried Fingers",
      price: "500",
    },

    {
      id: 4,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Fried Fingers",
      price: "500",
    },
    {
      id: 5,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Fried Fingers",
      price: "500",
    },

    {
      id: 6,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Fried Fingers",
      price: "500",
    },

    {
      id: 7,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Fried Fingers",
      price: "500",
    },

    {
      id: 8,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Fried Fingers",
      price: "500",
    },
    {
      id: 9,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Fried Fingers",
      price: "500",
    },

    {
      id: 10,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Fried Fingers",
      price: "500",
    },
  ];

  const renderMenuItem = ({ item }) => (
    <ItemComponent
      key={item.id}
      name={item.name}
      price={item.price}
      imageSource={item.image}
    />
  );

  return (
    <Screen>
      <Header>
        <Heading text="Our Menu" />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: w(3),
          }}
        >
          <Icon
            name="cart-outline"
            size={30}
            color={customTheme.colors.iconColorDark}
          />
        </View>
      </Header>
      <View style={{ paddingRight: w(7) }}>
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Search Item here"
          value={search}
          onChangeText={setSearch}
          error={error && !search}
          keyboardType="default"
          type="search"
          placeholderTextColor="lightgray"
          outlineStyle={{ borderRadius: 12 }}
          style={{
            backgroundColor: "transparent",
            borderRadius: "14px",
            fontWeight: "300",
          }}
          iconStyle={{ backgroundColor: "white" }}
        />
      </View>
      <View style={[style.container, { marginRight: w(7) }]}>
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          containerStyle={{ marginBottom: "20px" }}
          showsVerticalScrollIndicator={false}
        />
        <Link href={"/chooseItem"}>Choose Item</Link>
      </View>
    </Screen>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    justifyContent: "center",
  },
  SideBarText: {
    transform: [{ rotate: "-90deg" }],
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
  SideBarTextContainer: {
    display: "flex",
    flex: 1,
  },
});
