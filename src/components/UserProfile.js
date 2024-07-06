import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FormContext } from "./FormContext";

const UserProfile = () => {
    const { formData } = useContext(FormContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>User Profile</Text>
            <Text style={styles.field}>Nome: {formData.nome}</Text>
            <Text style={styles.field}>Email: {formData.email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20
    },
    field: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10
    }
});

export default UserProfile;
