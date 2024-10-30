const getdata = () => {
  const arr = localStorage.getItem("productid");
  if (arr) {
    return JSON.parse(arr);
  }
  return [];
};

export { getdata };
