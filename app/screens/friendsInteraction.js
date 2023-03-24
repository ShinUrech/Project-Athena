import { SafeAreaView, FlatList, View, StyleSheet, Image } from "react-native";
import { Text } from "react-native";
import { friends } from "../assets/users";

export const FriendsInterationScreen = () => {
    return(
        <SafeAreaView style={{height:1000}}>
            <Text style={{fontSize:50, marginLeft:10}}>Friends</Text>
            <FlatList style={{marginTop:30}} data={friends} renderItem={({item}) => <FriendWidget image={item.image} name={item.name} streak={item.streak}/>}/>
        </SafeAreaView>
    )
}

const FriendWidget = (props) => {
    return(
        <View style={styles.widgetContainer}>
            <Image source={props.image} style={{height:80, width:80, borderRadius:40, marginRight:10, marginLeft: -40}}/>
            <View style={{flex:1, paddingTop:8,}}>
                <Text style={{fontSize:22}}>{props.name}</Text>
                <Text style={{fontSize:15, paddingTop: 5}}>{props.streak} Days Streak 🔥</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    widgetContainer:{
        flexDirection:'row',
        height:80,
        width: '75%',
        backgroundColor: '#d9d9d9',
        marginLeft:60,
        borderRadius: 10,
        marginBottom: 15,
    }
})