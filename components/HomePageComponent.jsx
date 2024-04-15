import { useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import {
  Screen,
  Heading,
  Header,
  HomeComponent,
  CardComponent,
  Location,
} from "@/components";
import { Badge } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { useSelector, useDispatch } from "react-redux";
import { setDrawer } from "@/store/drawer/drawerSlice";
import { router } from "expo-router";
import { calculateTextWidth_HOME } from "@/utils/utils";
import { fetchMenus, fetchCategories } from "@/store/menu/menuSlice";
import { LoginComponent } from "./LoginComponent";
import { RegisterComponent } from "./RegisterComponent";

const SideBarIcons = () => {
  const dispatch = useDispatch();
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
    </View>
  );
};

export const HomePageComponent = () => {
  const { w, h, f } = useResponsiveScreen();
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.auth.userLocation);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const authScreen = useSelector((state) => state.auth.authScreen);

  const categories = useSelector((state) => state.menu.catgeoryData);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchMenus());
  }, [dispatch]);

  const imageSource = require("../assets/images/burger1.png");
  const sideBarItems = ["HOME", "MENU", "CART"];
  const selecteSideBarItem = (item) => {
    if (item === "menu") {
      router.navigate("/menu");
    }
    if (item === "cart") {
      router.navigate("/cart");
    }
  };

  if (!accessToken) {
    return authScreen === "login" ? <LoginComponent /> : <RegisterComponent />
  }

  if (!userLocation) {
    return <Location />;
  }

  const handleRedirect = (item) => {
    router.navigate(`menu/${item.id}`);
  };
  return (
    <Screen
      SideBarIcons={SideBarIcons}
      sideBarItems={sideBarItems}
      sidebarItemsMargin={30}
      sideBarItemActive={"home"}
      selecteSideBarItem={selecteSideBarItem}
      calculateTextWidth={calculateTextWidth_HOME}
    >
      <Header>
        <Heading text="Welcome Back!" />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
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
            ></Icon>
          </TouchableOpacity>
          <Icon
            name="bell-outline"
            size={30}
            color={customTheme.colors.iconColorDark}
          />
        </View>
      </Header>
      <View>
        <ScrollView
          style={{
            display: "flex",
            flexDirection: "row",
            gap: w(4),
            paddingTop: h(3),
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, key) => (
            <View
              style={{
                marginRight: w(10),
                marginVertical: h(2),
              }}
              key={key}
            >
              <CardComponent
                imageSource={imageSource}
                title={item.name}
                buttonText="Top Seller"
                onPress={() => handleRedirect(item)}
                style={{
                  marginHorizontal: "10px",
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <HomeComponent
          mainLabel="Our"
          subLabel="Menu"
          href="/menu"
        ></HomeComponent>
        <HomeComponent
          mainLabel="Appy"
          subLabel="Deal"
          href="/menu"
        ></HomeComponent>
        <HomeComponent
          mainLabel="What's"
          subLabel="New"
          href="/menu"
        ></HomeComponent>
      </View>
    </Screen>
  );
}
