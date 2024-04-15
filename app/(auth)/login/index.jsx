import { LoginComponent } from "@/components/LoginComponent";
import { useSelector } from "react-redux";
import { HomePageComponent } from "@/components/HomePageComponent";

export default function Page() {
  const accessToken = useSelector((state) => state.auth.accessToken);

  if (accessToken) {
    return <HomePageComponent />;
  }

  return (
    <LoginComponent></LoginComponent>
  );
}
