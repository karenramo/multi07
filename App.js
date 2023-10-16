import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Image } from 'react-native';

import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // URL de ejemplo de la API JSONPlaceholder para obtener usuarios
    const apiUrl = 'https://sheetdb.io/api/v1/gsmd0e2moiqx2';

    // Hacer una solicitud GET a la API
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Canciones</Text>
      <FlatList
        data={data}
        keyExtractor={item => String(item.ID)}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Image
              source={{ uri: item.IMAGEN }} // Utiliza la URL de la imagen
              style={styles.userImage} // Define los estilos para la imagen
            />
            <Text style={styles.userName}>{item.SONG}</Text>
            <Text style={styles.userEmail}>{item.ARTISTA}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userContainer: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  userImage: {
    width: 100, // Define el ancho deseado
    height: 100, // Define la altura deseada
    borderRadius: 50, // Esto establece el radio para formar un círculo (la mitad del ancho/altura)
  },
});
