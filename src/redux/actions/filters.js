export const setSortBy = (itemSort) => ({
  type: "SET_SORT_BY",
  payload: itemSort,
});

export const setCategory = (itemCategory) => (  {
  type: "SET_CATEGORY",
  payload: itemCategory,
}
);

export const setActiveSort = (obj) =>({
  type: "SET_ACTIVE_SORT",
  payload: obj,
})