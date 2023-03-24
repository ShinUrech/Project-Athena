import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text  } from "react-native";
import { useState } from "react";

export const QuestionsScreen = () => {
    return(
        <SafeAreaView>

            <QuestionCards question="How does Apple make it's revenue ?"answers={answers}/>
        </SafeAreaView>
    )
}

const QuestionCards = (props) => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:50, marginLeft:10}}>Learn!</Text>
            <Text style={{fontSize: 25, marginHorizontal: 30, marginTop:20, marginBottom:20}}>{props.question}</Text>
            <View style={styles.answerLayout}>
                <AnswerCard color='red' title={props.answers[0]}/>
                <AnswerCard color='#33C759' title={props.answers[1]}/>
            </View>
            <View style={styles.answerLayout}>
                <AnswerCard color='red' title={props.answers[2]}/>
                <AnswerCard color='red' title={props.answers[3]}/>
            </View>
        </View>
    )
}
const AnswerCard = (props) => {
    const [pressed, setPressed] = useState(false)
    return(
        <TouchableOpacity onPress={() => setPressed(!pressed)} >
            <View style={[styles.answerCard, {backgroundColor: pressed ? props.color: '#F5F6FA'}]}> 
                <Text style={{fontSize:20}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{

    },
    answerLayout:{
        flexDirection:'row', 
        justifyContent:'center',
        columnGap: 20,
        paddingVertical: 10
    },
    answerCard: {
        height: 250,
        width: 150,
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.10,
        shadowRadius: 6.68,
    }
}) 

const answers = [
    'Buying semi-conductor chips',
    'Selling iPhones, iPads...',
    "Apple's ad business",
    "Through Apple's car project"
]