import * as React from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, Image } from 'react-native';

const Item = ({ name, image }) => {
  return (
    <View style={styles.item}>
      <Text style={{ color: 'black' }}>{name}</Text>
      <Image style={styles.imageCard} source={{uri: image}}/>
    </View>
  );
}
export default function CardDiabeticDiet() {

  const countries = [
    {
      id: '1',
      name: 'United States',
      image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
    },
    {
      id: '2',
      name: 'United Kingdom',
      image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
    },
    {
      id: '3',
      name: 'Israel',
      image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
    },
    {
      id: '4',
      name: 'India',
      image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
    },
    {
      id: '5',
      name: 'Nigeria',
      image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
    },
    {
      id: '6',
      name: 'Uganda',
      image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
    },
    {
      id: '7',
      name: 'Uganda',
      image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
    },
    {
      id: '8',
      name: 'Uganda',
      image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
    },
    
  ];

  const renderItem = ({ item }) => (
    <Item name={item.name} image = {item.image} />
  );

  return (
  <ScrollView>
      <View style={styles.container}>
      <FlatList style={styles.cards} horizontal={true}
        data={countries}
        renderItem={renderItem}
      />
    </View>
  </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowRadius: 8,
  },
  imageCard: {
    width: 100,
    height: 100,
  }
});