import { AppRegistry} from "react-native";
import {View,Text, StyleSheet,TextInput,TouchableOpacity,ScrollView} from "react-native";
import {useState} from "react";
 
 
export default function App(){
    /*Função*/
    const [primeiroNumero ,setPrimeiroNumero] = useState(0); 
    const [segundoNumero ,setSegundoNumero] = useState(0);/*valor inicial da constante é oq esta dentro do parenteses*/ 
    const [resultado ,setResultado] = useState(0);/*altera o estado de algo,da constante ou da variavel-- set*/ 
   
    function somar(){
        setResultado(parseFloat(primeiroNumero) + parseFloat(segundoNumero));
        return setResultado;
    }/*parseFloat é para modificar o valor da variavel,por ser fracamente típada ela precisa converter a vaiavel para número*/ 
 
    function subtrair(){
        setResultado(parseFloat(primeiroNumero) - parseFloat(segundoNumero));
        return setResultado;
    }
 
    function multiplicar(){
        setResultado(parseFloat(primeiroNumero) * parseFloat(segundoNumero));
        return setResultado;
    }
 
    function dividir(){
        if(parseFloat(segundoNumero) <= 0){
        setResultado("Impossivel dividir por 0");
        }else{
            setResultado(parseFloat(primeiroNumero) / parseFloat(segundoNumero));
        }
        return setResultado;
    }
 
    function resto(){
        setResultado(parseFloat(primeiroNumero) % parseFloat(segundoNumero));
        return setResultado;
    }
 
    function mediaAritmetica(){
        setResultado((parseFloat(primeiroNumero) + parseFloat(segundoNumero)) / 2);
        return setResultado;
    }
 
    function quadradoSoma(){
        setResultado(Math.pow(parseFloat(primeiroNumero) + parseFloat(segundoNumero), 2));
        return setResultado;
    }
 
    function quadradoDiferenca(){
        setResultado(Math.pow(parseFloat(primeiroNumero) - parseFloat(segundoNumero), 2));
        return setResultado;
    }
 
    function somaQuadrado(){
        setResultado(Math.pow(parseFloat(primeiroNumero), 2) + Math.pow(parseFloat(segundoNumero), 2));
        return setResultado;
    }
    
    function somaDiferente(){
        setResultado((parseFloat(primeiroNumero) + parseFloat(segundoNumero)) * (parseFloat(primeiroNumero) - parseFloat(segundoNumero)) );
        return setResultado;
    }
 
    function dobroSoma(){
        setResultado((parseFloat(primeiroNumero) + parseFloat(segundoNumero)) * 2 );
        return setResultado;
    }
 
    function metade(){
        setResultado((parseFloat(primeiroNumero) * parseFloat(segundoNumero)) / 2 );
        return setResultado;
    }
 
    function maior(){
        setResultado(Math.max(parseFloat(primeiroNumero),parseFloat(segundoNumero)));
        return setResultado;
    }
 
    function menor(){
        setResultado(Math.min(parseFloat(primeiroNumero),parseFloat(segundoNumero)));
        return setResultado;
    }
 
    function diferencaAbsoluta() {
        setResultado(Math.abs(parseFloat(primeiroNumero) - parseFloat(segundoNumero)));
        return setResultado;
    }
    
 
    function potencia(){
        setResultado(Math.pow(parseFloat(primeiroNumero),parseFloat(segundoNumero)));
        return setResultado;
    }
 
    function somaRaiz(){
        setResultado(Math.sqrt(parseFloat(primeiroNumero) + parseFloat(segundoNumero)));
        return setResultado;
    }
 
    function somaRaiz(){
        setResultado(Math.sqrt(parseFloat(primeiroNumero) + parseFloat(segundoNumero)));
        return setResultado;
    }
 
    function porcentagemPrimeiro(){
        setResultado((parseFloat(primeiroNumero) / parseFloat(segundoNumero)) * 100);
        return setResultado;
    }
    
    function diferencaPercentual(){
        setResultado(((parseFloat(primeiroNumero) - parseFloat(segundoNumero)) / parseFloat(segundoNumero)) * 100) ;
        return setResultado;
    }
 
    function ponderada(){
        setResultado((parseFloat(primeiroNumero) * 3 + parseFloat(segundoNumero) * 2) / 5 ) ;
        return setResultado;
    }
 
    
    function limpar(){
       setPrimeiroNumero(0);
       setSegundoNumero(0);
       setResultado(0);
    }

    return(
      
        <View style={styles.tela}>
            <Text style={styles.tituloPrograma}> Exercícios</Text>
                <ScrollView>
                    <View style={styles.primeiroCampo}>
                        <TextInput style={styles.input} value={primeiroNumero} onChangeText={novoNumero => setPrimeiroNumero(novoNumero)}/*pega o que foi inseido,tipo uma variavle que guarda,a seta é para usar a varivel dentro do set(novoNumero)*/ placeholder="Informe um número:"/>
                    </View>
    
                    <View style={styles.segundoCampo}>
                        <TextInput style={styles.input} value={segundoNumero} onChangeText={novoNumero => setSegundoNumero(novoNumero)} placeholder="Informe outro número:"/>
                    </View>
    
                    <View style={styles.areaResultado}>
                        <Text style={styles.textoResultado}>{resultado}</Text>
                    </View>
    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={somar}> 
                            <Text style={styles.input}>Exercício 1</Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity style={styles.botao} onPress={subtrair}> 
                            <Text style={styles.input}>Exercício 2</Text>
                        </TouchableOpacity>
                    </View>
        
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={multiplicar}> 
                            <Text style={styles.input}>Exercício 3</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={dividir}> 
                            <Text style={styles.input}>Exercício 4</Text>
                        </TouchableOpacity>
                    </View>
    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={resto}> 
                            <Text style={styles.input}>Exercício 5</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={mediaAritmetica}> 
                            <Text style={styles.input}>Exercício 6</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={quadradoSoma}> 
                            <Text style={styles.input}>Exercício 7</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={quadradoDiferenca}>
                            <Text style={styles.input}>Exercício 8</Text>
                        </TouchableOpacity>
                    </View>
    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={somaQuadrado}> 
                            <Text style={styles.input}>Exercício 9</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={somaDiferente}> 
                            <Text style={styles.input}>Exercício 10</Text>
                        </TouchableOpacity>
                    </View>
    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={dobroSoma}> 
                            <Text style={styles.input}>Exercício 11</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={metade}>
                            <Text style={styles.input}>Exercício 12</Text>
                        </TouchableOpacity>
                    </View>
    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={maior}> 
                            <Text style={styles.input}>Exercício 13</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={menor}> 
                            <Text style={styles.input}>Exercício 14</Text>
                        </TouchableOpacity>
                    </View>
    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={diferencaAbsoluta}> 
                            <Text style={styles.input}>Exercício 15</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={potencia}> 
                            <Text style={styles.input}>Exercício 16</Text>
                        </TouchableOpacity>
                    </View>
    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={somaRaiz}> 
                            <Text style={styles.input}>Exercício 17</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={porcentagemPrimeiro}> 
                            <Text style={styles.input}>Exercício 18</Text>
                        </TouchableOpacity>
                    </View>
    
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={styles.botao} onPress={diferencaPercentual}>
                            <Text style={styles.input}>Exercício 19</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={styles.botao} onPress={ponderada}> 
                            <Text style={styles.input}>Exercício 20</Text>
                        </TouchableOpacity>
                    </View>
    
    
                    <View style={styles.areaLimpar}>
                    <TouchableOpacity style={styles.botao} onPress={limpar}>
                            <Text style={styles.input}>Limpar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </View>
 
    );
}
 
const styles = StyleSheet.create({
    telas:{
        backgroundColor: "#ffffff",
        height: "100%",
        width: "100%",
    },
    tituloPrograma:{
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
    input:{
        textAlign: "center",
        fontSize:15,
        color:"#1E90FF",
    },
    botao:{
        backgroundColor:"#ffffff",
        borderWidth:2,
        borderRadius:100,
        borderColor: "#FF69B4",
        width: "50%",
        padding: 20,
    },
    areaBotoes:{
        display:"flex",
        flexDirection:"row",
    },
    textoResultado:{
        color: "#1E90FF",
        fontSize:30,
        textAlign:"center",
    },
    areaLimpar:{
        marginTop:10,
        width:"100%",
    },
});
    
AppRegistry.registerComponent('main', () => App);