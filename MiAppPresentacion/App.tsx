import React from "react";
import {View, Text, Image, StyleSheet
} from "react-native";

export default function App() {
  return (
    <View style={styles.contenedor}>

      <View style={styles.tarjeta}>

        <Image
          source={{
            uri: "https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w="
          }}
          style={styles.foto}
        />

        <Text style={styles.nombre}>
          Iván Dominguez
        </Text>

        <Text style={styles.profesion}>
          Estudiante de Desarrollo de Software
        </Text>

        <Text style={styles.descripcion}>
          Me gusta la tecnología, la programación
          y no me llevo tan bien con matemáticas :3
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: "#DCEBFA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
  },

  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF0000",
  },

  profesion: {
    fontSize: 15,
    color: "#1B2759",
    marginTop: 8,
  },

  descripcion: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 15,
    color: "#555555",
  },

});