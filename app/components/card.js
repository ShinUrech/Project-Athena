import React from 'react';
import {Text, ImageBackground, View, StyleSheet, TouchableOpacity} from 'react-native';


const Card = props => {
  const {name, image, bio} = props.user;
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.card}>
        <ImageBackground
        source={image}
        style={styles.image}>
        </ImageBackground>
        <View style={{height:170, opacity:1, backgroundColor:'#F7F7F7', borderBottomStartRadius:10,overflow:"hidden", borderBottomEndRadius:10,
        padding:20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,}}>
            <Text style={styles.name}>{name}</Text>
          <Text style={{
        marginBottom:20,}}>{bio}</Text>
        </View>
      </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 70,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.68,

   
  },
  image: {
    width: '100%',
    height: 390,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
    width: 300
  },
  name: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});

export default Card;
