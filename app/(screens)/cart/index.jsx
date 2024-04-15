import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { 
  Heading,
  Header,
  AddToCartButton,  
} from "@/components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, emptyCartItems, updateCartItemQuantity } from "@/store/order/orderSlice";

export default function CartPage() {
  const { w,h,f } = useResponsiveScreen();
  const [quantities, setQuantities] = useState({}); 
  let cartItems = [];
  cartItems = useSelector((state) => state.order.cartData);

  const dispatch = useDispatch();
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.id] = item.quantity;
    });
    setQuantities(initialQuantities);
  }, []);

  const incrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1
    }));
    dispatch(updateCartItemQuantity({ productId, quantity: quantities[productId] + 1 }));
  };

  const decrementQuantity = (productId) => {
    setQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[productId] || 0) - 1;
      return {
        ...prevQuantities,
        [productId]: newQuantity >= 0 ? newQuantity : 0
      };
    });
    if(quantities[productId] - 1 === 0){
      dispatch(removeCartItem(productId));
    } else {
      dispatch(updateCartItemQuantity({ productId, quantity: quantities[productId] - 1 }));
    }
  };
  const removeCart = (productId) => {
    dispatch(removeCartItem(productId));
  }

  const emptyCart = () => {
    dispatch(emptyCartItems());
  }

  let subtotal = 0;
  cartItems.forEach(item => {
    subtotal += item.quantity * item.itemDetail.price; 
    for (const key in item.selectedOptions) {
      if (item.selectedOptions.hasOwnProperty(key)) {
        const option = item.selectedOptions[key];
        subtotal += item.quantity * option.price;
      }
    }
  });
  const GST = subtotal * 0.15;

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{position: 'relative'}}>
        <View 
          style={{ 
            backgroundColor: 'white',
            position: 'relative',
            zIndex: 1,
            
          }}>
          <View 
          style={{
            backgroundColor: customTheme.colors.primary,
            paddingHorizontal: h(2),
            marginHorizontal: w(2),
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingVertical: h(3.2), 
          }}>
            <Header type="innerHeader">
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
                    size={f(3)}
                    color={customTheme.colors.iconColorWhite}
                  ></Icon>
                </Link>
                <Heading text="Cart" alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.5)}} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: w(3),
                }}
              >
                <Icon
                  onPress={emptyCart}
                  name="delete-outline"
                  size={30}
                  color={customTheme.colors.iconColorWhite}
                />
              </View>
            </Header>
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
            paddingTop: 50,
            paddingBottom: 50,
            marginBottom: h(25),
            minHeight: h(68),
            flex: 1,
          }}>
            <View>
            {cartItems?.map((product, index) => (
              <View 
              style={styles.container} key={index}
              >
                <View style={{width: '25%', borderRadius: 12}}>
                  <Image source={product.itemDetail.imageUrl ? {uri: product.itemDetail.imageUrl} : require("../../../assets/images/dish3.jpg") } resizeMode="cover" style={{width:'100%', height: 80, borderRadius: 10}}></Image>
                </View>
                <View style={{width: '50%', paddingLeft: 10}}>
                  <Heading text={product.itemDetail.name} alignStyle={{fontSize: f(1.8), fontWeight: '700'}} />
                  <Text style={{color: customTheme.colors.primary, fontWeight: '700',fontSize: f(1.8)}}>PKR {product.itemDetail.price !== 0 ? product.itemDetail.price : 0 }</Text>
                  <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity 
                    onPress={() => removeCart(product.itemDetail.id)}
                  >
                    <Heading text="Remove Item"  alignStyle={{fontSize: f(1.8), paddingBottom: h(1.5), color: 'black', marginRight: 10}} />
                  </TouchableOpacity>
                    <Icon name="information" size={22} color="lightgray" />
                  </View>
                </View>
                <View  style={{width: '25%',  alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <IconButton
                      icon="minus"
                      onPress={() => decrementQuantity(product.id)}
                      
                      containerColor="#f2f2f2"
                      iconColor="black"
                      size={24}
                    />
                    <Text style={{color: 'black',fontSize: 16}}>{quantities[product.id] || 0}</Text>
                    <IconButton 
                      icon="plus"
                      containerColor="#f2f2f2"
                      iconColor="black"
                      size={24}
                      onPress={() => incrementQuantity(product.id)} 
                    />
                  </View>
                </View>
              </View>
            ))}
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: h(3)}}>
              <Text style={{color: customTheme.colors.primary, fontWeight: '800', fontSize: f(1.8)}}><Link href={"/menu"}>+ Add More Items</Link></Text>
            </View>
            </View>
        </View>
      </ScrollView>
      <View 
          style={{
            display: 'flex', 
            position: 'absolute',
            zIndex: 1000,
            bottom: 0,
            width: '100%',
            backgroundColor: '#f2f2f2',
            paddingTop: h(3),
            paddingBottom: h(2),
            right: 0
          }}>
          <View style={{paddingHorizontal: w(5), marginBottom: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
              <Text style={{color: '#767676', fontSize: f(1.6)}}>SubTitle</Text>
              <Text style={{color: '#767676', fontWeight: '300', fontSize: f(1.6)}}>PKR {subtotal}</Text>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#767676', fontSize: f(1.6)}}>GST 15%</Text>
              <Text style={{color: '#767676', fontWeight: '300', fontSize: f(1.6)}}>PKR {GST}</Text>
            </View>
          </View>
          <AddToCartButton
            buttonLabel="Proceed to Checkout"
            leftContentType="price"
            totalPrice= { GST + subtotal }
            buttonStyle={{paddingVertical: h(1.2)}}
            labelStyle={{fontSize: f(2), textTransform: 'uppercase'}}
            buttonType={cartItems?.length > 0 ? 'link' : ''}

          ></AddToCartButton>
        </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingBottom: 15,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
});
