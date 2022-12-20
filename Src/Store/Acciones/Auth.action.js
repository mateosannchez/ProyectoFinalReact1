import { URL_API, URL_AUTH_SIGNUP } from "../../../Constantes/DataBase"

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const singUp = (email, contraseña) => {
    console.log(email);
    console.log(contraseña);
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGNUP, {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json",
                },
                body: JSON.stringify({
                    email,
                    contraseña,
                    returnSecuteToken: true,
                })
            });
            const resData = await response.json()
            console.log(resData);
            dispatch({
                type: SIGNUP,
                token: resData.idToken,
                userId: resData.localId
            })
        } catch (error) {
            console.log(error);
        }
    };
};