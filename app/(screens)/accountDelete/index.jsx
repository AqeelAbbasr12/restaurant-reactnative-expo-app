import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import {
  Header,
  Heading,
  ButtonComponent,
  InputComponent,

} from "@/components";
import { Link, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";

export default function CheckoutPage() {
  const { w, h, f } = useResponsiveScreen();
  const auth = useSelector((state) => state.auth);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState(auth.user.email);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(false);
  console.log('auth', auth.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();


  const handleDeleteAccount = async () => {
    if (!address || !name || !email || phoneNumber) {
      setError(true);
      // return;
    } else {
      setLoading(false);
    }
  };


  return (
    <View style={{ backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%' }}>
        <View
          style={{
            backgroundColor: '#fff',
            position: 'relative',
            zIndex: 1,
          }}>
          <View
            style={{
              backgroundColor: customTheme.colors.primary,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              paddingVertical: h(3.2),
              paddingLeft: w(1),
            }}>
            <Header>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: w(2),
                }}>
                <Link href={"/"}>
                  <Icon
                    name="chevron-left"
                    size={f(4)}
                    color={customTheme.colors.iconColorWhite}
                  ></Icon>
                </Link>
                <Heading text="Delete Account" alignStyle={{ color: customTheme.colors.textWhite, fontSize: f(2.8) }} />
              </View>
            </Header>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: w(3),
            paddingVertical: h(3),
            backgroundColor: 'white',
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 70,
            marginTop: -40,
            paddingTop: 50,
            paddingBottom: 50,
            marginBottom: h(25),
            // minHeight: h(68),
            flex: 1,
          }}
        >
          <View style={{ marginVertical: 15 }}>
            <Text style={{color: customTheme.colors.textDark, fontSize: 18, fontWeight: 300}}>Please review your information</Text>
            <Text style={{color: customTheme.colors.textDark, fontSize: 16, fontWeight: 300}}>You can visit your profile to edit this information</Text>
          </View>
            <View>
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Full name"
                value={name}
                onChangeText={setName}
                error={error && !name}
                textColor="gray"
                helperText="full name is required"
                placeholderTextColor="lightgray"
                disabled={true}
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgrey', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 50 }}
                keyboardType="numeric"
                iconStyle={{ backgroundColor: "white", color: "black" }}
              />
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Enter email address"
                value={email}
                onChangeText={setEmail}
                error={error && !email}
                textColor="gray"
                helperText="email is required"
                placeholderTextColor="lightgray"
                disabled={true}
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                  color: 'lightgray'
                }}
                outlineStyle={{ outlineColor: 'lightgrey', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 50 }}
              />
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                error={error && !phoneNumber}
                textColor="gray"
                helperText="phone number is required"
                placeholderTextColor="lightgray"
                disabled={true}
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 50 }}
                keyboardType="numeric"
                iconStyle={{ backgroundColor: "white", color: "black" }}
              />
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
                error={error && !address}
                textColor="gray"
                helperText="address is required"
                placeholderTextColor="lightgray"
                disabled={true}
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                  color: 'lightgray'
                }}
                outlineStyle={{ outlineColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 50 }}
                keyboardType="numeric"
                iconStyle={{ backgroundColor: "white", color: "black" }}
              />
              <View style={{
                marginTop: 20,
              }}>
                <ButtonComponent
                  mode="contained"
                  label="Delete My account"
                  textColor="white"
                  textTransform="capitalize"
                  labelStyle={{ textTransform: "capitalize", fontWeight: 700 }}
                  style={{
                    color: "white",
                    borderRadius: 50,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                  }}
                  backgroundColor={customTheme.colors.primary}
                  onPress={handleDeleteAccount}
                  loading={loading}
                />
              </View>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: '100%',
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: 'lightgray',
    marginTop: 15,
  },
  dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
});
