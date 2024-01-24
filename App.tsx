import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';

const listTab=[
  {
    status:'All'
  },
  {
    status:'Perpel'
  },
  {
    status:'Green'
  },
  {
    status:'Red'
  },
  {
    status:'Yellow'
  }

]

const data=[
  {
    name:'ronaldo',
    status:'All'
  },
  {
    name:'Massi',
    status:'Perpel'
  },
  {
    name:'samiran',
    status:'Green'
  },
  {
    name:'kaka',
    status:'Yellow'
  },
  {
    name:'rahul',
    status:'Red'
  },

]



function App(): React.JSX.Element {
  const [status, setStatus] = useState('All')

  const [datalist, setDatalist] = useState('data')

  const setStatusFilter = (status: React.SetStateAction<string>) =>{
    if(status !=='All'){
      setDatalist([...data.filter(e => e.status === status)])
    }else{
      setDatalist(data)
    }
    setStatus(status)
  }

  const renderItem = ({item,index}) =>{
    return(
      <View key={index}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.status}</Text>
        </View>
      </View>
    )
  }



  const Item = ({item,index}) =>{
    return(

        <View style={styles.tablist} key={index}>
          <TouchableOpacity style={[styles.buttontab, status === item.status && styles.btnTabActive]} 
            onPress={()=> setStatusFilter(item.status)}
          >
            <Text style={{color:'#fff'}}>{item.status}</Text>
          </TouchableOpacity>
        </View>

    )
  }

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle='dark-content'/>
        <FlatList
          data={listTab}
          renderItem={Item}
          keyExtractor={(e, i) => i.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false} 
        />

        <FlatList 
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        >

        </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,

  },
  tablist:{
    backgroundColor:'#fff',
    padding:15,
    flexDirection:'row',
    display:'flex',
    alignSelf:'center',
  },
  buttontab:{
    backgroundColor:'red',
    width:Dimensions.get('window').width/4.8,
    justifyContent:'center',
    padding:10,
    flexDirection:'row',
  },
  btnTabActive:{
    backgroundColor:'#000'
  }

});

export default App;
