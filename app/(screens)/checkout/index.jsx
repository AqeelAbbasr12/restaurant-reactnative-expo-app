import { View, StyleSheet, ScrollView } from "react-native";
import { Badge, Text, Card, Button, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { 
  Header,
  Heading,
  ButtonComponent,
  InputComponent,

} from "@/components";
import { useState } from "react";
import { Link } from "expo-router";

export default function CheckoutPage() {
  const { w,h,f } = useResponsiveScreen();
  const [cityName, setCityName] = useState('');
  const [area , setArea] = useState('');
  const [completeAddress , setCompleteAddress] = useState('');
  const [specialNote , setSpecialNote] = useState('');
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [phoneNumber , setPhoneNumber] = useState('');
  const [addPhoneNumber , setAddPhoneNumber] = useState('');
  const [error , setError] = useState(false);
  
  const handlePlaceOrder = () => {
    alert('Place ORder Pressed')
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View 
          style={{ 
            backgroundColor: '#fff',
            position: 'relative',
            zIndex: 1,
          }}>
          <View 
          style={{
            backgroundColor: customTheme.colors.primary,
            marginHorizontal: w(2),
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingVertical: h(3.2), 
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
                <Link href={"/"}>
                  <Icon 
                    name="chevron-left"
                    size={f(4)}
                    color={customTheme.colors.iconColorWhite}
                  ></Icon>
                </Link>
                <Heading text="Checkout" alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.8)}} />
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
          }}
        >
        <InputComponent
            mode="outlined"
            label="Select City"
            placeholder="Username"
            value={cityName}
            onChangeText={setCityName}
            error={error && !cityName}
            helperText="Username is required"
            style={{
              backgroundColor: "transparent",
              borderRadius: 4,
              fontWeight: "300",
            }}
          />
          <InputComponent
            mode="contained"
            label="Select Area"
            placeholder="Select Area"
            value={area}
            onChangeText={setArea}
            error={error && !area}
            helperText="Area is required"
            style={{
              backgroundColor: "transparent",
              borderRadius: 4,
              fontWeight: "300",
            }}
          />
          <InputComponent
            mode="outlined"
            label="Complete Address"
            placeholder="Write complete address"
            value={completeAddress}
            onChangeText={setCompleteAddress}
            error={error && !completeAddress}
            helperText="Complete address is required"
            style={{
              backgroundColor: "transparent",
              borderRadius: 4,
              fontWeight: "300",
            }}
          /><InputComponent
          mode="outlined"
          label="Special Note"
          placeholder="Write special note"
          value={specialNote}
          onChangeText={setSpecialNote}
          error={error && !specialNote}
          helperText="Special note is required"
          style={{
            backgroundColor: "transparent",
            borderRadius: 4,
            fontWeight: "300",
          }}
        />
        </View>
      </ScrollView>
      <View 
          style={{
            display: 'flex', 
            position: 'absolute',
            zIndex: 1000,
            bottom: 0,
            width: '100%',
            backgroundColor: '#ffffff',
            paddingTop: h(3),
            paddingBottom: h(2),
          }}>
          <View style={{paddingHorizontal: w(5), marginBottom: 20}}>
            <ButtonComponent 
              mode="contained"
              label="Place Order"
              textColor="white"
              textTransform="uppwercase"
              labelStyle={{ textTransform: 'capitalize', fontWeight: 300 }}
              style={{ color: 'white', borderRadius: 50, paddingVertical: 14, paddingHorizontal: 10, marginVertical: h(6)}}
              backgroundColor={customTheme.colors.primary}
              onPress={handlePlaceOrder}
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
