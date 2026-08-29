import React from 'react';
import { View, Text, Image, StyleSheet, PixelRatio } from 'react-native';

const ProfileCard = ({ name, age, photo }) => {
  return (
    <View style={styles.card}>
      {/* Foto a la izquierda (30%) */}
      <Image source={{ uri: photo }} style={styles.photo} />

      {/* Nombre y edad a la derecha (70%) */}
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>Edad: {age} años</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10), // Escala con densidad
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
    marginVertical: '5%',
    marginHorizontal: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  photo: {
    width: '30%',
    aspectRatio: 1, // Cuadrado
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    marginRight: '5%',
  },
  info: {
    width: '65%', // 70% - margen derecho (5%)
    justifyContent: 'center',
  },
  name: {
    fontSize: PixelRatio.getFontScale() * 20,
    fontWeight: 'bold',
    color: '#333',
  },
  age: {
    fontSize: PixelRatio.getFontScale() * 16,
    color: '#666',
    marginTop: 4,
  },
});

export default ProfileCard;