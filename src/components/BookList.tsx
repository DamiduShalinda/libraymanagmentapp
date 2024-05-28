import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllBooks } from '@/api/books'
import { Book } from '../modal/book'
import BookListItem from './BookListItem'

type flatListProps = Partial<FlatListProps<any>> & {
    books : Book[]
}

const BookList = ( {books , ...flatListProps} : flatListProps) => {

  const doubleData : Book[] = [...books , ...books , ...books , ...books ]
  return (
    <FlatList 
        data={doubleData}
        numColumns={3}
        renderItem={({item} : {item : Book}) => <BookListItem item={item}/>}
        keyExtractor={(item : Book) => item.id.toString() }
        contentContainerStyle={styles.container}
        {...flatListProps}
    />
  )
}

export default BookList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    }
}) 

//todo: 1. Style flatlist that last two items does not justify to be center
