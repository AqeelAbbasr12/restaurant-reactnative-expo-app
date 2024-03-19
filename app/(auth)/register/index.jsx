import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { Link } from "expo-router";
import { Screen } from "@/components/Screen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Heading } from "@/components/Heading";
import { InputComponent } from "@/components/InputComponent";
import { ButtonComponent } from "@/components/ButtonComponent";

const SideItems = () => {
  return (
    <View>
      <Text>
        {/* <Icon name="menu" size={30} color={customTheme.colors.iconColor} /> */}
      </Text>
    </View>
  );
};

export default function RegisterPage() {
  const { w, h, f } = useResponsiveScreen();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!email || !password || !username || !phoneNumber) {
      setError(true);
      return;
    }
    setError(false);
    
  };
  const handleInputChange = (text) => {
    // Ensure input is numeric only
    const numericInput = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericInput);
  };
  return (
    <Screen SideItems={SideItems} customStyle={{ paddingTop: h(12)}}>
      <Link href={"/"} style={{position: 'absolute', top: h(4), right: h(3)}}><Icon name="close" size={f(2)} fontWeight="700" /></Link>
      <View style={{paddingRight: w(7)}}>
        <Heading text="Signup" alignStyle={{textAlign: 'center'}} />
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Username"
          value={username}
          onChangeText={setUserName}
          error={error && !username}
          helperText="Username is required"
          style={{ backgroundColor: 'transparent', borderRadius: 4, fontWeight: '300' }}
        />
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          error={error && !email}
          keyboardType="email-address"
          helperText="Email is required"
          style={{ backgroundColor: 'transparent', borderRadius: 4, fontWeight: '300' }}
        />
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          error={error && !password}
          helperText="Password is required"
          secureTextEntry
          style={{ backgroundColor: 'white', borderRadius: 4, fontWeight: '300' }}
          iconStyle={{ backgroundColor: 'white' }}
        />
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Phone"
          value={phoneNumber}
          onChangeText={handleInputChange}
          error={error && !phoneNumber}
          helperText="Phone is required"
          style={{ backgroundColor: 'white', borderRadius: 4, fontWeight: '300' }}
          keyboardType="numeric"
          iconStyle={{ backgroundColor: 'white' }}
        />
        <ButtonComponent 
          mode="contained"
          label="Sign up"
          textColor="white"
          textTransform="capitalize"
          labelStyle={{ textTransform: 'capitalize', fontWeight: 700 }}
          style={{ color: 'white', borderRadius: 50, paddingVertical: 14, paddingHorizontal: 10, marginTop: h(3)}}
          backgroundColor={customTheme.colors.primary}
          onPress={handleLogin}
        />
        <View style={[styles.lineContainer, {marginVertical: h(2)}]}>
          <Divider style={[styles.divider, {marginTop: h(.5)}]} />
          <Text style={{fontSize: f(1.5)}}> or </Text>
          <Divider style={[styles.divider, {marginTop: h(.5)}]} />
        </View>
        {/* Facebook Button */}
        <ButtonComponent 
          mode="contained"
          label="facebook"
          textColor="white"
          textTransform="capitalize"
          labelStyle={{ textTransform: 'capitalize', fontWeight: 700 }}
          style={{ color: 'white', borderRadius: 50, paddingVertical: 14, paddingHorizontal: 10}}
          backgroundColor='#395a9d'
          icon="facebook"
          onPress={handleLogin}
        />
        {/* Google Button */}
        <ButtonComponent 
          mode="contained"
          label="Google"
          textColor="white"
          textTransform="capitalize"
          labelStyle={{ textTransform: 'capitalize', fontWeight: 700 }}
          style={{ color: 'white', borderRadius: 50, paddingVertical: 14, paddingHorizontal: 10, marginTop: h(2)}}
          backgroundColor='#D92A0D'
          icon="google"
          onPress={handleLogin}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
  },
});
