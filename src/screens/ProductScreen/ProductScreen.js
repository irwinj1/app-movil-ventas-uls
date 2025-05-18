import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ProductComponent } from '../../components/ProductsComponent'

export function ProductScreen() {
  
    return (
      <View style={{flex:1,
        height:'100vh'
      }}>
        <ProductComponent />
      </View>
    )
  
}

