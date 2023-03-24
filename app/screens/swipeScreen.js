import { SafeAreaView } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import AnimatedStack from "./swiper";
import Card from "../components/card";
import users from "../assets/users";

export const SwipeScreen = () => {
    
      return (
        <View style={styles.pageContainer}>
          <AnimatedStack
            data={users}
            renderItem={({item}) => <Card user={item} />}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    pageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
    },
  });
