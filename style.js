import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = () => {
    return (
        StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
            },
            title: {
                fontSize: 20,
                marginBottom: 10,
            },
            input: {
                width: 200,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                padding: 10,
            },
            result: {
                marginTop: 20,
                fontSize: 16,
            },
        })
    )
}

export default style
