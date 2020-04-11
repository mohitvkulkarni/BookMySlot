const getAPY = () =>
  fetch("https://api.compound.finance/api/v2/ctoken")
    .then(res => res.json())
    .then(res => {
      var apy = 0;
      res.cToken.forEach(item => {
        //console.log(`${item.symbol}: ${item.supply_rate.value * 100}`);
        if (item.symbol === "cDAI") {
          apy = Math.floor(item.supply_rate.value * 10000) / 100;
        }
      });
      return apy;
    });

export default { getAPY };
