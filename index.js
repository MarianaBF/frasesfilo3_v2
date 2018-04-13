//import

import React from 'react';
import { Text , AppRegistry , View , Image , TouchableOpacity , Alert} from 'react-native';


//formatações

const Estilos = {
  principal:{
  	paddingTop:5,
  	backgroundColor:'white'
  
  },

  botao: {
   backgroundColor:'#20B2AA',
   paddingVertical:30,
   paddingHorizontal:20,
   marginTop:30,
   marginLeft:100,
   borderRadius: 10,
   width:150
  },

  textoBotao:{
  	color:'white',
  	fontSize:17,
  	fontWeight:'bold',
  	textAlign:'center'  
  }
  
};
//criar componente
const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 47);
  var frases = Array();
  frases[0] ='Daria tudo que sei pela metade do que ignoro. Descartes';
  frases[1] ='Começar a pensar é começar a ser atormentado. Camus';
  frases[2] ='O homem é a única criatura q se recusa ser oque é. Camus';
  frases[3] ='O que você fez daquilo que lhe fizeram? Sartre';
  frases[4] ='O que é bom? Tudo que eleva no homem a potência. Nietzsche';
  frases[5] ='A esperança é o sonho do homem acordado. Aristóteles';
  frases[6] ='O destino é cruel e os homens dignos de compaixão. Schopenhauer';
  frases[7] ='Conhece-te a ti mesmo e conhecerás o universo e os deuses. Sócrates';
  frases[8] ='Estou condenado a ser livre. Sartre';
  frases[9] ='A solidão é a sorte de todos os espíritos excepcionais. Schopenhauer';
  frases[10] ='Todo o conhecimento humano começou com intuições. Kant';
  frases[11] ='Nada grandioso no mundo foi realizado sem paixão. Hegel';
  frases[12] ='A arte existe para que a verdade não nos destrua. Nietzsche';
  frases[13] ='O destino embaralha as cartas e nós as jogamos. Schopenhauer ';
  frases[14] = 'Oque não se tem, oque não se é, são objetos do amor.Platão ';
  frases[15] ='A recusa da existência é ainda uma maneira de existir. Beauvoir ';
  frases[16] ='Se queres conhecer o passado, examina o presente. Confúcio';
  frases[17] ='É necessário ter o caos aqui dentro para gerar uma estrela. Friedrich Nietzsche ';
  frases[18] = 'O inferno são os outros! Sartre';
  frases[19] = 'Há homens que já nascem póstumos. Nietzsche';
  frases[20] ='Para ver muita coisa é preciso despregar os olhos de si. Nietzsche';
  frases[21] = 'Os sonhos são como os deuses.. Cícero ';
  frases[22] = 'A inércia é sinônimo da morte.A lei da vida é mudar.S. de Beauvoir ';
  frases[23] = 'A mulher sem medo dos homens incute-lhes medo. S. de Beauvoir';
  frases[24] = 'Oque é um adulto? Uma criança de idade. S. de Beauvoir';
  frases[25] = 'Nós, para os outros, apenas criamos pontos de partida. S. de Beauvoir';
  frases[26] = 'Vivemos tempos líquidos. Nada é para durar. Z. Bauman';
  frases[27] = 'É necessário sair da ilha para ver a ilha. Saramago';
  frases[28] = 'Educai as crianças e não será preciso castigar os homens. Pitágoras';
  frases[29] = 'Poderíamos ser melhores se não quiséssemos ser tão bons. Sigmund Freud';
  frases[30] = 'Eu sonho minhas pinturas e pinto meus sonhos. V. Gogh';
  frases[31] = 'Um homem saudável não tortura os outros. Jung';
  frases[32] = 'Oque negas te subordinas. Oque aceitas te transforma. Jung';
  frases[33] = 'Dentro de cada um de nós há um outro que não conhecemos.Jung';
  frases[34] = 'O homem que não atravessa o inferno das paixões não supera-as.Jung';
  frases[35] = 'Aquele que fere o outro, fere a si próprio.Jung';
  frases[36] = 'A humildade é a única base sólida de todas virtudes. Confúcio';
  frases[37] = 'Qual sua responsabilidade da desordem que se queixas? Sigmund Freud';
  frases[38] = 'Quando vires um homem mau, examina-te a ti mesmo. Confúcio';
  frases[39] = 'Para ganhar sabedoria, elemine coisas todos os dias. Lao-Tse';
  frases[40] = 'Sim, sei de onde venho! Insatisfeito com a labareda ardo para me consumir! Aquilo em que toco torna-se luz. Carvão aquilo que abandono. Sou certamente labareda! F.Nietzsche';
  frases[41] = 'Renunciar ao amor parecia-me tão insensato como desinteressarmo-nos da saúde porque acreditamos na eternidade. S. de Beauvoir';
  frases[42] = 'É válido procurarmos conhecer a que má e penosa servidão nos sujeitamos quando nos abandonamos ao poder alternado dos prazeres e das dores, esses dois amos tão caprichosos quanto tirânicos. Sêneca';
  frases[43] = 'O homem não é nada em si mesmo. Não passa de uma probabilidade infinita. Mas ele é o responsável infinito dessa probabilidade. Camus';
  frases[44] = 'No meio do inverno, aprendi que existia em mim um invencível verão. Camus';
  frases[45] = 'Eu era uma criança, esse monstro que os adultos fabricam com as suas mágoas. Sartre';
  frases[46] = 'Um homem não pode ser mais homem do que os outros, porque a liberdade é semelhantemente infinita em cada um. Sartre';







  var fraseEscolhida = frases [numeroAleatorio];
  Alert.alert(
  'Frases Filosóficas',
  fraseEscolhida,
  [
    
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]
  );
 
}

const App = () => {
	const { botao, textoBotao, principal} = Estilos;
	return (
        
        <View style={principal}>
        <Image source={ require('./imgs/info.png')} style={{width:30, height:30, marginRight:100}}/>
        <Image source={ require('./imgs/logo2.png')} style={{width:300, height:300, marginLeft:28}}/>
        <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>NOVA FRASE</Text>
        </TouchableOpacity>
        </View>
		);
};




AppRegistry.registerComponent('frasesfilo3', () => App);
