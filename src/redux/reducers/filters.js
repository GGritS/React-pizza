const initialState = {
  category: null,
  navBarCategories: [
    "Мясные",
    "Вегетерианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ],
  sortTypes: [
    { name: "популярности", type: "rating", order: 'desc', },
    { name: "цене", type: "price", order: 'desc', },
    { name: "алфавиту", type: "name", order: 'asc', }
  ],
  selectedSort: { name: "популярности", type: 'rating', order: 'desc',},
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        selectedSort: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "SET_ACTIVE_SORT":
      return{
        ...state,
        selectedSort: action.payload
      };
    default:
      return state;
  }
};

export default filters;
