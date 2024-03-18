import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { Link } from "expo-router";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { CardComponent } from "../components/CardComponent";

const SideItems = () => {
  return (
    <View>
      <Text>
        <Icon name="menu" size={30} color={customTheme.colors.iconColorWhite} />
      </Text>
    </View>
  );
};

export default function HomePage() {
  const { w,h,f } = useResponsiveScreen();

  const cardData = [
    {
      id: 1,
      imageSource: require('../assets/images/burger1.png'),
      title: 'Swiss Mushroom',
      buttonText: 'Top Seller',
      buttonTextColor: '#F29434',
    },
    {
      id: 2,
      imageSource: require('../assets/images/burger1.png'),
      title: 'Sunny Rocket',
      buttonText: 'Top Seller',
      buttonTextColor: '#F29434',
    },
    // Add more data as needed
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
        <ScrollView style={{display: 'flex', flexDirection: 'row', gap: w(4), paddingVertical: h(3)}} horizontal={true} showsHorizontalScrollIndicator={false}>
        {cardData.map((item, key) => (
          <View style={{boxShadow: 'rgb(161, 161, 161) 1px 2px 7px 1px',borderRadius: 25, width: 185, marginRight: w(10), marginVertical: h(2)}} key={key}>
            <CardComponent
              imageSource={item.imageSource}
              title={item.title}
              buttonText={item.buttonText}
              buttonTextColor="#F29434"
              onPress={() => console.log('Button pressed')}
              style={{ marginHorizontal: '10px' }}
            />
          </View>
        ))}
        </ScrollView>
      </View>
      <Link href={"/users"}>Go to user</Link>
    </Screen>
  );
  
}
