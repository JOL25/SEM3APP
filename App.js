import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ProfileCard from './components/ProfileCard';

const App = () => {
  const users = [
    { id: '1', name: 'Juan Pérez', age: 28, photo: 'https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80' },
    { id: '2', name: 'María Gómez', age: 34, photo: 'https://thumbs.dreamstime.com/b/la-mujer-feliz-hermosa-que-muestra-la-muestra-del-amor-cerca-observa-83939671.jpg' },
    { id: '3', name: 'Carlos Ruiz', age: 22, photo: 'https://www.shutterstock.com/shutterstock/photos/1299232858/display_1500/stock-photo-beard-lumberjack-man-bearded-man-long-beard-brutal-caucasian-hipster-with-moustache-unshaven-1299232858.jpg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard name={item.name} age={item.age} photo={item.photo} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;