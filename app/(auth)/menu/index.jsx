import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { InputComponent } from "@/components/InputComponent";
import { ItemComponent } from "@/components/ItemComponent";
import { useDispatch } from "react-redux";
import { setDrawer } from "@/store/drawer/drawerSlice";
import { useState } from "react";

const SideItems = () => {
  const { h, f } = useResponsiveScreen();
  const dispatch = useDispatch();

  const sideitems = ["Home"];

  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            dispatch(setDrawer(true));
          }}
        >
          <Text>
            <Icon
              name="menu"
              size={30}
              color={customTheme.colors.iconColorWhite}
            />
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate={"normal"}
        style={{
          ...style.SideBarTextContainer,
          marginTop: h(5),
          marginBottom: h(4),
        }}
      >
        {sideitems.map((sideitem, index) => (
          <Text
            key={index}
            style={{
              ...style.SideBarText,
              fontSize: f(2.8),
              // marginVertical: h(6),
              marginBottom: -4,
            }}
          >
            {sideitem.toLocaleUpperCase()}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default function MenuPage() {
  const { w, h, f } = useResponsiveScreen();
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
    <Screen SideItems={SideItems}>
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
      <View style={{paddingRight: w(7)}}>
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Search Item here"
          value={search}
          onChangeText={setSearch}
          error={error && !search}
          keyboardType=""
          type="search"
          placeholderTextColor="lightgray"
          outlineStyle={{borderRadius: 12}}
          style={{ backgroundColor: 'transparent', borderRadius: '14px', fontWeight: '300' }}
          iconStyle={{ backgroundColor: 'white' }}
        />
      </View>
      <View style={style.container}>
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          containerStyle={{ marginBottom: '20px'}}
        />
      </View>
    </Screen>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    justifyContent: 'center',
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
