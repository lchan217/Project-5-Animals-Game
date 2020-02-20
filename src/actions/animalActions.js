export const fetchAnimals = () => {
  return dispatch => {
    dispatch({ type: "LOADING_ANIMALS" });
    return fetch("https://animals-game-api.herokuapp.com/api/animals")
      .then(response => response.json())
      .then(animals => dispatch({ type: "FETCH_ANIMALS", payload: animals }));
  };
};

export const fetchGoals = () => {
  return dispatch => {
    dispatch({ type: "LOADING_GOALS" });
    return fetch("https://animals-game-api.herokuapp.com/api/goals")
      .then(response => response.json())
      .then(goals => dispatch({ type: "FETCH_GOALS", payload: goals }));
  };
};

export const nursingToWild = id => {
  return { type: "NURSING_TO_WILD", id };
};

export const endangeredToNursing = id => {
  return { type: "ENDANGERED_TO_NURSING", id };
};

export const nurse = id => {
  return { type: "NURSE", id };
};
