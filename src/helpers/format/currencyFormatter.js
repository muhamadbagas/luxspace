/* eslint no-extend-native: ["error", {"exceptions": ["Number"]}] */

if (!Number.hasOwnProperty("currencyFormatter"))
  Number.prototype.currencyFormatter = function (decimals = 0) {
    const currency = new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: "IDR",
    });

    return currency.format(this);
  };
