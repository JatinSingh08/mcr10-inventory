const filtersHandler = (state) => {
  const { productsData ,filters: { category, lowStockItems, sort} } = state;
  let newData = productsData;
  newData = category === "All" ? newData : newData.filter(data => data.department === category);
  newData = lowStockItems ? newData.filter(data => data.stock <= 10) : newData;
  newData = sort ? newData.sort((a, b) => a["sort"] - b["sort"]) : newData;
  return newData;
}

export { filtersHandler };