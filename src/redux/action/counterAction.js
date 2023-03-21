export const UP_COUNTER = "UP_COUNTER";
export const DOWN_COUNTER = "DOWN_COUNTER";

export const upCounter = () => {
  return {
    type: UP_COUNTER,
    payload: 1,
  };
};

export const downCounter = () => {
  return {
    type: DOWN_COUNTER,
    payload: 1,
  };
};
