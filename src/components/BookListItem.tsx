import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Book } from '@/modal/book'
import { Image} from "expo-image"
import { Feather } from '@expo/vector-icons';
import { useRouter , Link } from 'expo-router'

const BookListItem = ({item} : {item : Book}) => {


    const handlePlusButton = () => {
        ToastAndroid.show("Added to Library", ToastAndroid.SHORT)
    }

  return (
      <Link asChild href={{
            pathname : `/books/[id]`,
            params : {id : item.id}
      }}>
    <TouchableOpacity style={styles.container}>
        <View>
        <Image
        style={styles.image}
        source={{
            uri: item.coverImageUrl,
        }} 
        />
        <TouchableOpacity onPress={handlePlusButton} style={styles.plusButton}>
        <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <Text style={styles.text}>{item.bookName}</Text>
    </TouchableOpacity>
      </Link>
  )
}

export default BookListItem

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : "column",
        alignItems : "center",
        justifyContent : 'flex-start',
        marginBottom : 20,
        gap : 3,
    },
    image : {
        width : 120,
        height : 180,
        position : "relative",
    },
    text : {
        fontSize : 16,
        fontWeight : "700",
        maxWidth : 120,
    },
    plusButton : {
        position : "absolute",
        right : 5,
        bottom : 5,
        backgroundColor : "white",
        borderRadius : 50,
        padding : 5,
        borderColor : "black",
        borderWidth : StyleSheet.hairlineWidth,
        opacity : 0.8,

    }
})