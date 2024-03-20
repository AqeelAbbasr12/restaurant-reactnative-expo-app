import { View, ScrollView } from "react-native";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Drawer } from "./Drawer";
import Svg, { Text } from "react-native-svg";

export function Screen({
  children,
  SideBarIcons = null,
  customStyle,
  sideBarItems = [],
  sidebarItemsMargin = 20,
  sideBarItemActive = "",
  selecteSideBarItem = () => {},
}) {
  const { w, h } = useResponsiveScreen();

  return (
    <View
      style={{
        backgroundColor: customTheme.colors.primary,
        flex: 1,
      }}
    >
      <View>
        <Drawer />
      </View>

      <View
        style={{
          width: w(17),
          flex: 1,
          alignItems: "center",
          paddingTop: h(6),
        }}
      >
        {SideBarIcons && <SideBarIcons />}
        <ScrollView
          style={{
            backgroundColor: "transparent",
            flex: 1,
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          {sideBarItems?.map((item, index) => {
            const textWidth =
              item.length === 1
                ? item.length * 35
                : item.length > 1 && item.length <= 2
                ? item.length * 25
                : item.length === 3
                ? item.length * 22
                : item.length === 4
                ? item.length * 21
                : item.length === 5
                ? item.length * 20.5
                : item.length === 6
                ? item.length * 20
                : item.length === 7
                ? item.length * 19.5
                : item.length === 8
                ? item.length * 19
                : item.length === 9
                ? item.length * 18.8
                : item.length === 10
                ? item.length * 18.6
                : item.length === 11
                ? item.length * 18.4
                : item.length === 12
                ? item.length * 18.3
                : item.length >= 13 && item.length <= 17
                ? item.length * 18
                : item.length >= 18 && item.length <= 21
                ? item.length * 17.7
                : item.length >= 22 && item.length <= 25
                ? item.length * 17.6
                : item.length * 17;

            const containerHeight = textWidth;

            return (
              <Svg
                key={index}
                width="50"
                height={containerHeight}
                style={{
                  marginBottom: sidebarItemsMargin,
                }}
                onPress={() => selecteSideBarItem(item.toLocaleLowerCase())}
              >
                <Text
                  x="50"
                  y={textWidth - 25}
                  fill="white"
                  fontSize="24"
                  transform={`rotate(-90, 50, ${textWidth - 10})`}
                  fontWeight={
                    sideBarItemActive.toLocaleLowerCase() ===
                    item.toLocaleLowerCase()
                      ? 800
                      : 300
                  }
                  style={{
                    backgroundColor: "pink",
                  }}
                >
                  {item}
                </Text>
              </Svg>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: "white",
          position: "absolute",
          right: w(0),
          width: w(83),
          height: "100%",
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          paddingTop: h(6),
          paddingLeft: w(7),
          ...customStyle,
        }}
      >
        {children}
      </View>
    </View>
  );
}
