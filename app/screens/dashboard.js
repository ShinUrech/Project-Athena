import { SafeAreaView ,View, FlatList, ImageBackground , Text, TouchableOpacity, ScrollView} from "react-native";
import React, { useState } from "react";

export const DashboardScreen = () => {
    return(
        <SafeAreaView>
          <Text style={{fontSize:50, marginLeft:10}}>Portfolio</Text>
          <ScrollView style={{marginTop:30}}>
          <View style={{marginLeft:20, marginBottom:6}}>
            <Text style={{fontSize: 40}}>302.78 CHF</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:20, color:'#33C759'}}>+12,13 CHF {'(4.20%)'}</Text>
              <Text style={{fontSize:20, color:'#888888', marginLeft: 10}}>Today</Text>
            </View>
          </View>
          <ImageBackground source={require('../assets/portfolio-chart.jpg')}>
            <View style={{height:180}}/>
          </ImageBackground>
          <Text style={{fontSize:25, marginLeft: 30, marginVertical:10}}>Pending Investments</Text>
          <InvestmentCard company='Apple' price={57.99} percentage={0.12} />
          <InvestmentCard company='Microsoft' price={43.12} percentage={0.2}/>
          <InvestmentCard company='Nvidia' price={23.78} percentage={0.15}/>
          <Text style={{fontSize:35, marginLeft: 30, marginVertical:10}}>Investments</Text>
          <AssetCard company='Uber' price={27.3} color='red' percentage={0.3} return={4}/>
          <AssetCard company='Pfizer' price={55.8} color='#33C759' percentage={0.36} return={8}/>
          <AssetCard company='Allianz' price={72.3} color='#33C759' percentage={0.41} return={3}/>
          </ScrollView>
        </SafeAreaView>
    )
}

const InvestmentCard = (props) => {
  return(
          <View style={{marginBottom:10}}>
              <TouchableOpacity style={{width:'95%', alignSelf:'center', height:70, borderWidth:1, borderRadius:10, padding: 10}}>
                <Text style={{fontSize:20, paddingBottom:5}}>{props.company}</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={{paddingLeft: 5, backgroundColor:'gray', width:45, marginRight:10}}>x{props.percentage}</Text>
                  <Text>{props.price} CHF</Text>
                  <Text style={{color:'gray', paddingLeft: 100}}>Invest {props.price} CHF</Text>
                </View>
              </TouchableOpacity>
          </View>
  )
}

const AssetCard = (props) => {
  return(
    <View style={{marginBottom:10}}>
        <TouchableOpacity style={{width:'95%', alignSelf:'center', height:70, borderWidth:1, borderRadius:10, padding: 10}}>
          <Text style={{fontSize:20, paddingBottom:5}}>{props.company}</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{paddingLeft: 5, backgroundColor:'gray', width:45, marginRight:10}}>x{props.percentage}</Text>
            <Text>{props.price} CHF</Text>
            <Text style={{color:props.color, paddingLeft: 200}}>{props.return}%</Text>
          </View>
        </TouchableOpacity>
    </View>
)
}