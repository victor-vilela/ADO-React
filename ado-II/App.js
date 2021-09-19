import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';

async function executeGet(url,jsonState){
    //get síncrono com o uso do fetch
    await fetch(url)
    .then(response => {
          if (response.status === 200) {
            console.log('sucesso');
            response.json().then(function(result){ 

              //console.log(result);
              jsonState(result)

              });
          } else {
            throw new Error('Erro ao consumir a API!');
          }
      })
      .then(response => {
        //console.debug(response);
      }).catch(error => {
        console.error(error);
      });
  }



const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({name,portrayed,img}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={portrayed}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: img,
          }}
        />

        <Text style={styles.paragraph}>{name}</Text>
      </Pressable>
    </View>
    )
}

export default function App() {

  const [jsonData,setJsonData] = React.useState({})

  executeGet("https://www.breakingbadapi.com/api/characters",setJsonData)

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    
    return(
      <Pessoa name={item.name} 
              img={item.img}
              portrayed={item.portrayed}
      />
    )
  }
  
    const ListHeader = () => {

    return(
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>
          HEADER
        </Text>
      </View>
    )
  }

  return (

    <View style={styles.container}>

      <FlatList
        data={jsonData}
        renderItem={meuItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#bfdce3'
  },
  tinyLogo: {
    width: 70,
    height: 100,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#808080"
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: 'bold',
    fontSize: "48",
    padding: "10"
  }
});
