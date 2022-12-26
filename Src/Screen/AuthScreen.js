import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
  } from "react-native";
  import React, { useCallback, useReducer, useEffect, useState } from "react";
  
  import Colores from "../../Constantes/Colores";
  import { useDispatch } from "react-redux";
  import { signup } from "../Store/Acciones/Auth.action";
  import Input from "../Componentes/Input";
  
  const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
  
  const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid,
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues,
      };
    }
    return state;
  };
  
  const AuthScreen = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (error) {
        Alert.alert("A ocurrido un error", error, [{ text: "Ok" }]);
      }
    }, [error]);
  
     
    const [formState, dispatchFormState] = useReducer(formReducer, {
      inputValues: {
        email: "",
        password: "",
      },
      inputValidities: {
        email: false,
        password: false,
      },
      formIsValid: false,
    });
  
    const handleSignUp = () => {
      dispatch(signup(email, password));
    };
  
    const onInputChangeHandler = useCallback(
      (inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
          type: FORM_INPUT_UPDATE,
          value: inputValue,
          isValid: inputValidity,
          input: inputIdentifier,
        });
        // console.log(email, password);
      },
      [dispatchFormState]
    );
  
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Iniciar sesion</Text>
          <View>
            <Input
              id="email"
              label="Email"
              keyboardType="email-address"
              placeholder="Email"
              required
              email
              autoCapitalize="none"
              errorText="Por favor ingrese un email valido"
              onInputChange={onInputChangeHandler}
              name='email'
              style={{fontWeight: "bold", borderWidth: 1, borderRadius: 10,}}
            />
  
            <TextInput
              style={styles.input}
              id="contraseña"
              label="Contraseña"
              placeholder="Contraseña"
              keyboardType="default"
              secureTextEntry
              required
              minLength={6}
              autoCapitalize="none"
              errorText="Por favor ingrese una contraseña"
              onInputChange={onInputChangeHandler}
              name='contraseña'
              
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.button}>
              <Button
                //title={isSingUp ? "REGISTRARME" : "LOGIN"}
                title="Ingresar"
                color={Colores.gray}
                onPress={handleSignUp}
                style={{borderRadius: 50}}
              />
            </View>
           
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default AuthScreen;
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "grey",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      marginBottom: 18,
      fontWeight: "bold",
      
    },
    container: {
      width: "80%",
      maxWidth: 400,
      backgroundColor: Colores.white,
      borderRadius: 10,
      height: "45%",
      maxHeight: 400,
      padding: 12,
    },
    footer: {
      marginTop: 62,
    },
    button: {
      marginBottom: 8,
      borderRadius: 10,
    },
    input: {
      // height: 40,
      // margin: 22,
      // borderWidth: 1,
      // padding: 10,
      // borderRadius: 10,
      fontWeight: "bold", 
      borderWidth: 1, 
      borderRadius: 10, 
      marginTop: 15,
    },
  });

