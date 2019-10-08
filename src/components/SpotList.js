import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import api from '../services/api';


const SpotList = ({tech}) => {
    [spots, setSpots] = useState([]);
    useEffect(()=> {
        (async ()=> {
            console.log("TESTE")
            const response = await api.get(`/spots`, {
                params: {tech}
            });
            
            setSpots(response.data);
        })();
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Empresas que usam a tecnologia <Text style={styles.bold}>{tech}</Text>
            </Text>
            <FlatList 
                style={styles.list} 
                data={spots}
                keyExractor={(spot) => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={styles.listItem}>
                        <Image src={item.thumbnail_url}></Image>
                    </View>
                )}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,

    },
    bold: {
        fontWeight: 'bold'
    },
    list: {
    
    },
    listItem: {
        
    }
})

export default SpotList;