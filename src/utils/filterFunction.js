const filtersHandler = (state) => {
  const {
    productsData,
    filters: { category, lowStockItems, sort },
  } = state;
  let newData = productsData;
  newData =
    category === "All"
      ? newData
      : newData.filter((data) => data.department === category);
  newData = lowStockItems
    ? newData.filter((data) => parseFloat(data.stock) <= 10)
    : newData;
  newData = sort
    ? newData.sort((a, b) =>
        sort === "name"
          ? a.name.localeCompare(b.name)
          : sort === "price"
          ? parseFloat(a.price) - parseFloat(b.price)
          : parseFloat(a.stock) - parseFloat(b.stock)
      )
    : newData;
  return newData;
};

export { filtersHandler };
