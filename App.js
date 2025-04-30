import { AppRegistry } from "react-native";
import {View, Text, StyleSheet, TextInput} from "react-native";

export default function App(){
    return(
        <View style={styles.telas}>
            <Text style={styles.titulo}>Exercícios</Text>

            <View style={styles.primeiroCampo}>
                <TextInput style={styles.campo} placeholder="Digite um número: "/>
            </View>

            <View style={styles.segundoCampo}>
                <TextInput style={styles.campo}  placeholder="Digite um número: "/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    telas:{
        backgroundColor: "#ffffff",
        height: "100%",
        width: "100%",
    },
    titulo:{
        color: "#1E90FF",
        textAlign: "center",
        marginTop: 50,
        fontSize: 59,
    },
    primeiroCampo:{
        backgroundColor: "#FF69B4",
        margin: 10,
        padding:10,
        borderRadius:100,
        marginTop: 25, 
        width:"90%",
    },
    segundoCampo:{
        backgroundColor: "#FF69B4",
        margin: 10,
        padding:10,
        borderRadius:100,
        marginTop: 25, 
        width:"90%",
    },
    campo:{
        color:"#ffffff",
        fontSize:15,
        textAlign:"center",
    },

});
    
AppRegistry.registerComponent('main', () => App);