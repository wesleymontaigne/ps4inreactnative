import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View ,SafeAreaView, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const hour = ()=>{

let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
  return hours
}

hour();

export default function App() {
  return (
    <SafeAreaView>
<View style={styles.container}>
      <ImageBackground style={styles.image} source={{uri:'https://thumbs.gfycat.com/FamousCircularDingo-size_restricted.gif'}} 
      >
<View style={styles.icons}>
<View>
<FontAwesome name="plus" size={30} color="yellow" />
</View>
{/*icons*/}
<View >
<Text style={{color:'white',paddingLeft:10}}>1</Text>
<View style={{flexDirection:'row'}}>

<MaterialCommunityIcons name="chat-alert" size={30} color="white" />
<Text style={{paddingLeft:5,color:'white'}}>View new posts for your Communitys.</Text>
</View>
</View>
{/*finish icon*/}

{/*icons*/}
<View >
<View style={{flexDirection:'row'}}>
<FontAwesome name="circle" size={14} color="dodgerblue" />
<Text style={{color:'white',paddingLeft:5}}>6</Text>
</View>
<View style={{flexDirection:'row'}}>

<FontAwesome5 borderRadius='50'  name="square-full" size={24} color="white" />

</View>
</View>
{/*finish icon*/}

{/*icons*/}
<View style={{paddingTop:14}} >
  <View></View>
<View style={{flexDirection:'row'}}>
<AntDesign name="Trophy" size={30} color="white" />
<AntDesign name="star" size={14} color="yellow" />
<Text style={{color:'white',paddingLeft:5}}>6</Text>


</View>
</View>
{/*finish icon*/}

{/*icons*/}
<View style={{paddingTop:14}} >
  <View></View>
<View style={{flexDirection:'row'}}>

<Text style={{color:'white',paddingLeft:5}}>{new Date().toDateString()}</Text>


</View>
</View>
{/*finish icon*/}



</View>

{/* Games View*/}
<View style={{flexDirection:'row'}}>
{/*Imgem*/}
<View style={styles.games}>
<Image
        style={styles.logo}
        source={{
          uri: 'https://gmedia.playstation.com/is/image/SIEPDC/ps-store-bag-22jun20?$1600px--t$',
        }}
      />
</View>
{/*end image*/}
{/*Imgem*/}
<View style={styles.games}>
<Image
        style={styles.logo}
        source={{
          uri: 'https://aux.iconspalace.com/uploads/1680618524919476813.png',
        }}
      />
</View>
{/*end image*/}
{/*Imgem*/}
<View style={styles.games}>
<Image
        style={styles.logo}
        source={{
          uri: 'https://www.tilibra.com.br/storage/products/md/god-of-war_god-of-war.png',
        }}
      />
</View>
{/*end image*/}
{/*Imgem*/}
<View style={styles.games}>
<Image
        style={styles.logo}
        source={{
          uri: 'https://img.pngio.com/yu-yu-hakusho-png-6-png-image-yu-yu-hakusho-png-795_1005.png',
        }}
      />
</View>
{/*end image*/}
{/*Imgem*/}
<View style={styles.games}>
<Image
        style={styles.logo}
        source={{
          uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c78bc3fc-9f08-47ca-81ae-d89055c7ec49/dcyu7io-0e80a88b-e789-4143-b723-193187e99ece.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzc4YmMzZmMtOWYwOC00N2NhLTgxYWUtZDg5MDU1YzdlYzQ5XC9kY3l1N2lvLTBlODBhODhiLWU3ODktNDE0My1iNzIzLTE5MzE4N2U5OWVjZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZqO4CCjwVBktyxutof5PYgTw8idpmkn8LJ-DRcwV4-4',
        }}
      />
</View>
{/*end image*/}
{/*Imgem*/}
<View style={styles.games}>
<Image
        style={styles.logo}
        source={{
          uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f8830f0-679a-4974-977c-bd5802617c82/d8n8zc0-44c67a32-50a5-4cb8-a4ee-3f3005270992.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGY4ODMwZjAtNjc5YS00OTc0LTk3N2MtYmQ1ODAyNjE3YzgyXC9kOG44emMwLTQ0YzY3YTMyLTUwYTUtNGNiOC1hNGVlLTNmMzAwNTI3MDk5Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9GSBYNab3SHDTZ1UEK8cWufgqGWc64mVfoCs9muOsMo',
        }}
      />
</View>
{/*end image*/}


</View>

<View style={{backgroundColor:'black',width:1200,height:240 ,margin:100,opacity:0.5}}>

  
<Image
        style={styles.logo}
        source={{
          uri: 'http://s2.glbimg.com/14Ul4iWpsz8ULn4SV-VIZGPRhvs=/695x0/s.glbimg.com/po/tt2/f/original/2016/12/02/the-last-guardian-listing-thumb-01-ps4-us-13jun161.png',
        }}
      />
     
<View style={{flexDirection:'row', backgroundColor:'black',width:1000,height:12 ,margin:10,opacity:0.5, borderTopColor:'white',borderWidth:1}}>
<View style={{flexDirection:'row',margin:5}}>
<AntDesign name="Trophy" size={30} color="white" />
<AntDesign name="star" size={14} color="yellow" />
<Text style={{color:'white',paddingLeft:5}}>6</Text>
</View>
<View style={{flexDirection:'row',margin:5,paddingLeft:10,} }>
<AntDesign name="Trophy" size={30} color="white" />
<AntDesign name="star" size={14} color="yellow" />
<Text style={{color:'white',paddingLeft:5}}>34</Text>
</View>

<View style={{flexDirection:'row',margin:5,paddingLeft:10,} }>
<AntDesign name="Trophy" size={30} color="white" />
<AntDesign name="star" size={14} color="yellow" />
<Text style={{color:'white',paddingLeft:5}}>23</Text>
</View>

<View style={{flexDirection:'row',margin:5,paddingLeft:10,} }>
<AntDesign name="Trophy" size={30} color="white" />
<AntDesign name="star" size={14} color="yellow" />
<Text style={{color:'white',paddingLeft:5}}>10</Text>
</View>

<View style={{flexDirection:'row',margin:5,paddingLeft:10,} }>
<AntDesign name="Trophy" size={30} color="white" />
<AntDesign name="star" size={14} color="yellow" />
<Text style={{color:'white',paddingLeft:5}}>09</Text>
</View>

</View>



</View>
      </ImageBackground>
      
      <StatusBar style="auto" />

    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
  
    width:'100%',
    height:'100%'

  },

  image:{
    width:'100%',
    height:660

  },
  icons:{
padding:20,
justifyContent:'space-between',
flexDirection:'row'

  },
  games:{
width:180,
height:180,
backgroundColor:'#0000CD',
margin:20,
borderRadius:25


  },
  logo: {
    width: 150,
    height: 150,
    margin:20,
    borderRadius:25
    
  },
});
