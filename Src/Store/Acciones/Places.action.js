import * as FyleSystem from "expo-file-system"

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
    return async (dispatch) => {
        const fileName = image.split("/").pop();
        const Path = FyleSystem.documentDirectory + fileName;

        try {
            FyleSystem.moveAsync({
                from: image,
                to: Path,
            });
        } catch (error) {
            console.log(error);
        }
        dispatch({type: ADD_PLACE, payload: { title, image: Path}});
        
    }
}