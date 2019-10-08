import React, {useEffect} from 'react';
import {
    SafeAreaView, 
    Text, 
    AsyncStorage, 
    Image,
    StyleSheet
} from 'react-native';
import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

const List = () => {
    [tech, setTech] = React.useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(techs => {
            const techsArray = techs.split(",").map(tech => tech.trim());

            setTech(techsArray);
        })
    }, [])
    return (
        <SafeAreaView>
            <Image source={logo} style={styles.logo}/>
            {tech.map(tech => <SpotList key={tech} tech={tech} />)}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 40
    }
})


export default List;
