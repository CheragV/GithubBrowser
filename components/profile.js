import React, { Component } from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class Profile extends Component {

    constructor(props){
        super(props)
        
    }

    componentWillMount(){
        if(this.props.state.userData.length > 0){

        }
    }
    render () {
        // var target = {}
        // var text= fetch('https://api.github.com/users/CheragV').then((res)=>res.json()).then((data)=>{
        //     console.log(data)
        //     target=data
        // })
        // console.log("target = ", target)
        console.log(this.props.state)
        return (
            <View>
                <Text>This is Profile View</Text>
            </View>
        )    
    }
}

export default Profile
