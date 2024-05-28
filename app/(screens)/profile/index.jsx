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
import { fetchProfile, updateProfile } from "@/store/profile/profileSlice";

export default function CheckoutPage() {
  const { w, h, f } = useResponsiveScreen();
  const auth = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.profile.profileData);
  const [address, setAddress] = useState(userData?.address);
  const [name, setName] = useState(userData?.fullName);
  const [email, setEmail] = useState(auth.user.email);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const toast = useToast();
  useEffect(() => {
    dispatch(fetchProfile(auth.accessToken));
  },[dispatch]);

  const handleProfileUpdate = async () => {
    if (!address || !name || !email || !phoneNumber) {
      setError(true);
      // return;
    } else {
      setLoading(false);
      const profileData = {
        phoneNumber,
        fullName: name,
        address: address,
      };

      const data = {
        profileData,
        token: auth.accessToken,
      }
      await dispatch(updateProfile(data));
      toast.show("Profile information update successfully.", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
      // router.navigate('/');
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
                <Heading text="Profile" alignStyle={{ color: customTheme.colors.textWhite, fontSize: f(2.8) }} />
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
            <Heading text="Personal Information" alignStyle={{ fontSize: f(2) }} />
          </View>
            <View>
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Write full name"
                value={name}
                onChangeText={setName}
                error={error && !name}
                textColor="gray"
                helperText="full name is required"
                placeholderTextColor="lightgray"
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgrey', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
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
                }}
                outlineStyle={{ outlineColor: 'lightgrey', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
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
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
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
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
                keyboardType="numeric"
                iconStyle={{ backgroundColor: "white", color: "black" }}
              />
              <View style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
                <ButtonComponent
                  mode="outlined"
                  label="Cancel"
                  textColor="black"
                  textTransform="capitalize"
                  labelStyle={{ textTransform: "capitalize", fontWeight: 500 }}
                  style={{
                    color: "lightgrey",
                    borderRadius: 4,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    width: "48%",
                    borderColor: "lightgrey",
                  }}
                  backgroundColor={'white'}
                  onPress={() => router.navigate('/')}
                  loading={loading}
                />
                <ButtonComponent
                  mode="contained"
                  label="Save"
                  textColor="white"
                  textTransform="capitalize"
                  labelStyle={{ textTransform: "capitalize", fontWeight: 700 }}
                  style={{
                    color: "white",
                    borderRadius: 4,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    width: "48%",
                  }}
                  backgroundColor={customTheme.colors.primary}
                  onPress={handleProfileUpdate}
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
