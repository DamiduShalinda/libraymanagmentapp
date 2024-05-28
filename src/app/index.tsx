import { View, Text, ViewComponent, ScrollView, TouchableHighlight , StyleSheet } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { getAllBooks } from '@/api/books'
import BookList from '../components/BookList'
import { defaultStyles } from '../constants/styles'

export default function Book() {

  const {data , isError , isLoading , error} = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks
})

  if(isLoading){
    return <View>
    <Text>Loading .....</Text>
  </View>
  }
  if(isError){
    return <View>
    <Text>{error.message}</Text>
  </View>
  }
  if(!data){
    return <View>
    <Text>Not Recognized</Text>
  </View>
  }

  return (
    <View style={defaultStyles.defaultContainer}>
      <ScrollView>
      <BookList books={data} scrollEnabled={false}/>
      </ScrollView>
    </View>
  )
}
