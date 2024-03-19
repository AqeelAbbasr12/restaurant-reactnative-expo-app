import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { HomeComponent } from "@/components/HomeComponent";
import { CardComponent } from "../components/CardComponent";
import { useDispatch } from "react-redux";
import { setDrawer } from "@/store/drawer/drawerSlice";

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

export default function HomePage() {
  const { w, h, f } = useResponsiveScreen();

  const cardData = [
    {
      id: 1,
      imageSource: require("../assets/images/burger1.png"),
      title: "Swiss Mushroom",
      buttonText: "Top Seller",
    },
    {
      id: 2,
      imageSource: require("../assets/images/burger1.png"),
      title: "Sunny Rocket",
      buttonText: "Top Seller",
    },
  ];

  return (
    <Screen SideItems={SideItems}>
      <Header>
        <Heading text="Welcome Back!" />

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
          {cardData.map((item, key) => (
            <View
              style={{
                marginRight: w(10),
                marginVertical: h(2),
              }}
              key={key}
            >
              <CardComponent
                imageSource={item.imageSource}
                title={item.title}
                buttonText={item.buttonText}
                onPress={() => console.log("Button pressed")}
                style={{
                  marginHorizontal: "10px",
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <HomeComponent mainLabel="Our" subLabel="Menu"></HomeComponent>
        <HomeComponent mainLabel="Appy" subLabel="Deal"></HomeComponent>
        <HomeComponent mainLabel="What's" subLabel="New"></HomeComponent>
      </View>
    </Screen>
  );
}

const style = StyleSheet.create({
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
