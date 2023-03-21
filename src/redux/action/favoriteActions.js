export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const action_agregar_favoritos = (personajes) => {
  return {
    type: ADD_FAVORITE,
    payload: personajes,
  };
};

export const action_borra_favoritos = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};
