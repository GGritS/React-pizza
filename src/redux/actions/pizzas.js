import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const fetchPizzas = (category, selectedSort) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(
      category === null
        ? `http://localhost:3001/pizzas?_sort=${selectedSort.type}&_order=${selectedSort.order}`
        : `http://localhost:3001/pizzas?category=${category}&_sort=${selectedSort.type}&_order=desk`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
