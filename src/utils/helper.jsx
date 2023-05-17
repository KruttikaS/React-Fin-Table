export const setRowColour = (assetClass) => {
  switch (assetClass) {
    case "Macro": return "white";
    case "Credit": return "blue";
    case "Equities": return "green";
    default: return;
  }
}

export const sortData = (data, type) => {
  switch (type) {
    case "alphabeticalSort":
      data.sort((a, b) => a.ticker.localeCompare(b.ticker))
      // data.sort((a, b) => {
      //   if (a.ticker < b.ticker) {
      //     return -1;
      //   }
      //   if (a.ticker > b.ticker) {
      //     return 1;
      //   }
      //   return 0;
      // })
      return data;
    case "numericalSort":
      data.sort((a, b) => b.price - a.price)
      return data;
    case "assetSort":
      data.sort((a, b) => {
        const orders = { 'Equities': 0, 'Macro': 1, 'Credit': 2 };
        return orders[a.assetClass] - orders[b.assetClass];
      });
      return data;
    default: return "";
  }
}

export const dropdownOptions = [
  { value: "ticker", label: "Ticker" },
  { value: "assetClass", label: "Asset Class" },
  { value: "price", label: "Price" },
];