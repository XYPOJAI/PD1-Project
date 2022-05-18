import {View,Text} from 'react-native'; 
import {useRoute} from '@react-navigation/native'; 

export default function Details(){
    //navigation
    const route = useRoute(); 
    let u = route.params; 
    //JSX
    return (
        <View>
            <Text>NAME:</Text>
            <Text>{u.firstName} {u.lastName}</Text>
            <Text>PHONE:</Text>
            <Text>{u.phone}</Text>
            <Text>ADDRESS:</Text>
            <Text>STREET:</Text>
            <Text>{u.address.street}</Text>
            <Text>SUBURB:</Text>
            <Text>{u.address.suburb}</Text>
        </View>
    ); 
}