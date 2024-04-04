import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container : {
        width:'100%',
        flex: 1,
        backgroundColor: '#ffe5ec',
        
    },
    
    form:{
        
        backgroundColor: '#ffb3c6',
        width: '100%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
       
        
       
     
    },
    input:{
        width: 215,
        height: 50,
        backgroundColor: '#ff8fab',
        borderRadius: 20,
        padding: 16,
        fontSize: 10,
        marginRight:10
        
       
    },
    
    icon:{
       height:18,
       width: 18,
       marginRight:20
      
       
    },
    img:{
        width:90,
        height: 90,
        borderRadius: 100,
        marginRight: 25
       
    }
})