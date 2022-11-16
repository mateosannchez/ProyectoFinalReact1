import {
    StyleSheet,
    Button,
    Text,
    View,
    Pressable,
    Modal as NewModal,
} from "react-native";
import React from "react";
import Colores from "../Constantes/Colores";

const Modal = (props) => {
    const { isVisible, actionDeleteItem } = props;

    return (
        <NewModal animationType="fade" transparent={true} visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={styles.containerElim}>
                    <Text style={{margin: 5,}}>Queres Eliminar este elemento? </Text>


                    <View style={styles.containerBorrar}>
                        <Button
                            title="Borrar"
                            onPress={() => actionDeleteItem()}
                            
                        />
                        <Button
                            title="Continuar"
                            onPress={() => actionDeleteItem()}
                        />

                    </View>


                </View>
            </View>
        </NewModal>
    );
};

export default Modal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    containerElim: {
        backgroundColor: Colores.primary,
        width: 300,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 10,
        width: "80%",
    },
    containerBorrar: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        margin: 20, 
        width: 200,

    }
});