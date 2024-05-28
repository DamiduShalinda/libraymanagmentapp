import { View, Text, ViewComponent, ScrollView, TouchableHighlight , StyleSheet } from 'react-native'
import React from 'react'
import {Redirect, useNavigation} from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { getAllBooks } from '@/api/books'
import { defaultStyles } from '@/constants/styles'
import BookList from "@/components/BookList";

export default function Book() {

  const navigation = useNavigation()
  const {data , isError , isLoading , error} = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks
})

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle : "Books",
      headerSearchBarOptions: {
        placeholder: "Find In Books",
        onChangeText: (event: { nativeEvent: { text: string } }) => {
          console.log(event.nativeEvent.text)
        }
      },
    })
  } , [navigation])

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
