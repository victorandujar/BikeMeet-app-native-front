import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import headerStyles from "./HeaderStyles";

const Header = (): JSX.Element => (
  <View>
    <ScrollView style={headerStyles.container} horizontal={true}>
      <View style={headerStyles.slider}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dehhtvcgi/image/upload/v1682678126/pexels-alexandre-saraiva-carniato-5970275_axietj.jpg",
          }}
          style={headerStyles.image}
        />
      </View>
      <View style={headerStyles.slider}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dehhtvcgi/image/upload/v1678553444/Detail_page_f94vfp.jpg",
          }}
          style={headerStyles.image}
        />
      </View>
      <View style={headerStyles.slider}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dehhtvcgi/image/upload/v1678553439/rutas-btt-barcelona_eusypd.jpg",
          }}
          style={headerStyles.image}
        />
      </View>
    </ScrollView>
    <Text style={headerStyles.textTitle}>BikeMeet</Text>
    <Text style={headerStyles.textSlogan}>Never ride alone</Text>
  </View>
);

export default Header;
