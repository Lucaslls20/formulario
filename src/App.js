import React from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
});

const App = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        Alert.alert('Você entrou! Seus dados estavam completos', JSON.stringify(data));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo(a)</Text>

            <Controller
                control={control}
                name="nome"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.Viewinput}>
                        <TextInput
                            placeholder="Insira seu nome"
                            placeholderTextColor='black'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                        />
                        {errors.nome && <Text style={styles.errorText}>{errors.nome.message}</Text>}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.Viewinput}>
                        <TextInput
                            placeholder="Insira seu email"
                            placeholderTextColor='black'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                        />
                        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.Viewinput}>
                        <TextInput
                            placeholder="Insira sua senha"
                            placeholderTextColor='black'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry
                            style={styles.input}
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                    </View>
                )}
            />

            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#C7DFFF'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20
    },
    Viewinput:{
    width: '90%',
    padding:10,
    marginBottom:10
    },
    input: {
        height:50,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 6,
        color:'black',
        padding:10,
     
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: '#007BFF',
        padding: 10,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    errorText: {
        color: 'red',
        marginBottom: 10
    }
});

export default App;
