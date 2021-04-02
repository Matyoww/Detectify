import React from "react";
import { Header, Image } from "react-native-elements";

const LogoComponent = () => (
  <Image
    style={{ height: 25, width: 100 }}
    source={require("../assets/detectify-white.png")}
  />
);

export default function Cstm_Header() {
  return (
    <Header
      placement="left"
      leftComponent={<LogoComponent />}
      rightComponent={{
        icon: "search",
        color: "#fff",
        marginRight: 10,
      }}
      backgroundColor="#435F71"
    />
  );
}
