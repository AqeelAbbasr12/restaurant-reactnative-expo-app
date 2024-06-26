import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, RadioButton } from "react-native-paper";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { 
  OptionComponent,
  AddToCartButton,
  Customization
} from "@/components";
import { Link, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuDetail } from "@/store/menu/menuSlice";
import { addTocart } from "@/store/order/orderSlice";


export default function MenuPage() {
  const [quantity, setQuantity] = useState(1); 
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (customizationId, option) => {
    setSelectedOptions(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [customizationId]: option,
    }));
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMenuDetail(id));
  },[dispatch]);
  const itemDetail = useSelector((state) => state.menu.menuDetail);
  
  const { w,h,f } = useResponsiveScreen();
  
  const addToCartAction = () => {
    const data = {
      quantity,
      itemDetail,
      selectedOptions,
    }
    dispatch(addTocart(data));
  }


  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View 
          style={{ 
            backgroundColor: customTheme.colors.primary,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingTop: h(5), 
            position: 'relative',
            zIndex: 1,
            paddingLeft: w(3),
          }}>
          <Header>
            <View 
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: w(3),
              }}>
              <Link href={"/menu"}>
                <Icon 
                  name="chevron-left"
                  size={f(4)}
                  color={customTheme.colors.iconColorWhite}
                ></Icon>
              </Link>
              <Heading text={itemDetail.name} alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.5)}} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: w(3),
              }}
            >
              <Link href={'/cart'}>
                <Icon
                  name="cart-outline"
                  size={35}
                  color={customTheme.colors.iconColorWhite}
                  />
              </Link>
            </View>
          </Header>
          <View 
            style={{
              width: '100%',
              height: 200,
              display: 'block', 
              position: 'relative',
            }}
          >
              <Image source={itemDetail.imageUrl ? {uri: itemDetail.imageUrl} : require("../../../assets/images/burger1.png")} style={{ width: '100%', height: '100%', bottom: -40, marginHorizontal: "auto", resizeMode:"contain"}}></Image>
            </View>
        </View>
        
        <View 
          style={{ 
            paddingHorizontal: w(5), 
            paddingVertical: h(3), 
            backgroundColor: 'white',
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 70,
            marginTop: -40,
            paddingTop: 100,
            paddingBottom: 50,
            marginBottom: h(10)
          }}>
          <Heading text={itemDetail.name} alignStyle={{fontSize: f(2.5), marginBottom: 20}}></Heading>
          <Text style={{color: 'black', fontWeight: 300, color: 'gray', fontSize: f(1.6), marginBottom: h(2)}}>
            {itemDetail.description}
          </Text>
          {/* {itemDetail} */}
          {itemDetail?.customizations?.map(customization => (
            <Customization key={customization.id} customization={customization} 
            onOptionSelect={handleOptionSelect} 
            selectedOption={selectedOptions[customization.id]}
            />
          ))}
          
        </View>
      </ScrollView>
      {/* <View 
        style={{
          backgroundColor: customTheme.colors.primary, 
          paddingVertical: h(3), 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 1000,
          bottom: 0,
          width: '100%'
        }}>
          <Text>Cart is currently not available!</Text>
      </View> */}
      <View 
        style={{
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          position: 'absolute',
          zIndex: 1000,
          bottom: 10,
          width: '100%'
        }}>
          <View style={{width: '100%', paddingLeft: 15}}>
            <AddToCartButton
              buttonLabel="Add To Cart"
              leftContentType="quantity"
              buttonStyle={{paddingVertical: h(1.2)}}
              labelStyle={{fontSize: f(2), textTransform: 'uppercase'}}
              buttonType="cart"
              onButtonPress={addToCartAction}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              quantity={quantity}
              ></AddToCartButton>
          </View>
        </View>
      
    </View>
  );
}

const style = StyleSheet.create({
  
});
