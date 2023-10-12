import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';

export default function App() {
    return ( <View style = { styles.container } >
        <View style={styles.style1}>
        <Text style={styles.baseText1}>LOGIN</Text>
        </View>
        <View style={styles.style2}>
            <View style={{
                 borderRadius:'2px',
                 borderWidth:'1px',
                 borderColor:'red',
                 width:'80%',
                 padding:'20px',
                 flexDirection:'row'
            }}>
            <Image source={require('./assets/avatar_user.png')} style={{width:'20px',height:'20px'}}></Image>
            <TextInput style={styles.input1} placeholder='Name'></TextInput>
            </View>
            <View style={{
                borderRadius:'2px',
                borderWidth:'1px',
                borderColor:'red',
                width:'80%',
                padding:'20px',
                flexDirection:'row'
            }}>
            <Image source={require('./assets/lock.png')} style={{width:'20px',height:'20px'}}></Image>
            <TextInput style={styles.input2} placeholder='Password'></TextInput>
            <Image source={require('./assets/eye.png')} style={{width:'20px',height:'20px'}}></Image>
            </View>           
        </View>
        <View style={styles.style3}>
            <Button title='LOGIN'></Button>
        </View>
        <View style={styles.style4}>
        <Text style={styles.baseTextst4}>Forgot your password?</Text>
        </View>
        <StatusBar style = "auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(to bottom, #FBCB00, #BF9A00)'
    },
    style1:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    style2:{
        flex:2,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    style3:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',

    },
    style4:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    baseText1:{
        fontWeight: 'bold',
        fontSize: 40
    },
    baseTextst4:{
        fontWeight:'bold',
        fontSize:25
    },
    Button:{
        width:'80%'
    }

});