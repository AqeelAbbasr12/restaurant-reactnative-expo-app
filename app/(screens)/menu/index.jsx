import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { InputComponent } from "@/components/InputComponent";
import { ItemComponent } from "@/components/ItemComponent";
import { useState } from "react";
import { calculateTextWidth_MENU } from "@/utils/utils";
import { router } from "expo-router";
import { useSelector, useDispatch } from "react-redux";


export default function MenuPage() {
  const { w } = useResponsiveScreen();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState();
  const [error, setError] = useState();
  const [activeMenu, setActiveMenu] = useState("All");

  var menuItems = useSelector((state) => state.menu.menuData);
  var categoryMenu = useSelector((state) => state.menu.catgeoryData);
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);
  const handleSearch = (query) =>{
    setSearchQuery(query);
    menuItems = menuItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  const img = require("../../../assets/images/menu/chicken_fry.png");
  const selecteSideBarItem = (item) => {
    setActiveMenu(item);
    if(item === 'all'){
      setFilteredMenuItems(menuItems);
    } else {
      const category = categoryMenu.find(cat => cat.name.toLocaleLowerCase() === item);
      const categoryId = category ? category.id : null;
      if (categoryId) {
        const filteredItems = menuItems.filter(menuItem => Number(menuItem.categoryId) === categoryId);
        setFilteredMenuItems(filteredItems);
      }
    }
  };

  const renderMenuItem = ({ item }) => (
    <ItemComponent
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      imageSource={item.imageUrl}
    />
  );

  const SideBarIcons = () => {
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
              router.navigate('/');
            }}
          >
            <Text>
              <AntIcon name="arrowleft" size={30} color={"white"} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Screen
      SideBarIcons={SideBarIcons}
      sideBarItems={["All", ...categoryMenu.map((items) => items.name)]}
      sidebarItemsMargin={5}
      calculateTextWidth={calculateTextWidth_MENU}
      sidebarTopMargin={10}
      selecteSideBarItem={selecteSideBarItem}
      sideBarItemActive={activeMenu}
    >
      <Header>
        <Heading text="Our Menu" />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: w(3),
          }}
        >
          <TouchableOpacity 
            onPress={() => router.navigate('/cart')}
          >
          <Icon
            name="cart-outline"
            size={30}
            color={customTheme.colors.iconColorDark}
            />
          </TouchableOpacity>
        </View>
      </Header>
      <View style={{ paddingRight: w(7) }}>
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Search Item here"
          value={searchQuery}
          onChangeText={handleSearch}
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
          data={filteredMenuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          containerStyle={{ marginBottom: "20px" }}
          showsVerticalScrollIndicator={false}
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
