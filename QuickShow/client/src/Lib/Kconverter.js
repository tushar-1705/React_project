const Kconverter = (num) => {
  if (num > 1000) {
    return (num / 1000).toFixed(1) + 'k';
  } else {
    return num;
  }
};

export default Kconverter;
