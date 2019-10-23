import React from 'react';
import {View, Text} from 'react-native';
import {Card, Button, Image, ThemeProvider} from 'react-native-elements';

const Recipe = props => {
    
    return (
        <View style={{width: 200, alignItems: 'center'}}>
            <Card title="Recipe Card">
                <Image 
                    source={{uri : "https://fakeimg.pl/200x200/?text=sample recipe"}}
                    style={{width: 200, height: 200 }}
                />
                <Button title="Details"/>
            </Card>
        </View>
    )
}

export default Recipe;
