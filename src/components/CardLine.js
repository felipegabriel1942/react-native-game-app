import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardLine = ({label = '', content = '-'}) => {
    return (
        <View style={ styles.line }>
            <Text style={ [styles.label, styles.cell] }>{ label }</Text>
            <Text style={ [styles.content, styles.cell] }>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingBottom: 10
    }, 
    label: {
        flex: 2,
        fontWeight: "bold"
    },
    content: {
        flex: 3
    },
    cell: {
        paddingLeft: 2
    }
});

export default CardLine;