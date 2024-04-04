import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";


export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.form}>
            <Image style={styles.img} source={require('../../../assets/pngtree-ocean-day-pink-cartoon-cute-crab-png-image_6747075.png')} />
                
                
                <TextInput style={styles.input}
                placeholder="Pesquisar..."
                placeholderTextColor="#fff"
                />
                <TouchableOpacity 
                >
                    <Image style={styles.icon}
                    source={require('../../../assets/pesquisa.png')}
                    />
                </TouchableOpacity>
            
            </View>
        </View>
    )
}