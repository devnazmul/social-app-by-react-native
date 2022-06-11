import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../../constants'

const Loading = () => {
  return (
    <View style={{width:'100%',backgroundColor:COLORS.lightGray, height:300, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:50, color:COLORS.secondaryYellow}}>Loading....</Text>
    </View>
  )
}

export default Loading