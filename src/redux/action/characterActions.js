export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

export const addCharacter = (personaje) => {
  return {
    type: ADD_CHARACTER,
    payload: personaje,
  };
};
export const deleteCharacter = (idPersobaje) => {
  return {
    type: DELETE_CHARACTER,
    payload: idPersobaje,
  };
};

