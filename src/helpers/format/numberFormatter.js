/* eslint no-extend-native: ["error", {"exceptions": ["Number"]}] */

if (!Number.hasOwnProperty("numberFormatter"))
  Number.prototype.numberFormatter = function (decimals = 0) {
    const formatter = new Intl.NumberFormat(navigator.language);

    return formatter.format(this);
  };
