import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default function City({item}) {

    return (
        <View style={styles.city}>

            <View>
                <Text style={styles.label}>Ciudad:</Text>
                <Text style={styles.text}>{ item.city }</Text>
            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    city: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        fontSize: 18,
    },
})