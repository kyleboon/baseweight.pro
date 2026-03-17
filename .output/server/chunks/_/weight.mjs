const weightUtils = /* @__PURE__ */ (function() {
  function WeightToMg(value, unit) {
    if (unit == "g") {
      return value * 1e3;
    }
    if (unit == "kg") {
      return value * 1e6;
    }
    if (unit == "oz") {
      return value * 28349.5;
    }
    if (unit == "lb") {
      return value * 453592;
    }
    return 0;
  }
  function MgToWeight(value, unit, display = false) {
    if (unit == "g") {
      return Math.round(100 * value / 1e3) / 100;
    }
    if (unit == "kg") {
      return Math.round(100 * value / 1e6) / 100;
    }
    if (unit == "oz") {
      return Math.round(100 * value / 28349.5) / 100;
    }
    if (unit == "lb") {
      if (display) {
        const poundsFloat = value / 453592;
        const pounds = Math.floor(poundsFloat);
        const oz = Math.round(poundsFloat % 1 * 16 * 100) / 100;
        let out = "";
        if (pounds) {
          out += `${pounds}lb`;
          if (pounds > 1) out += "s";
        }
        if (oz || !pounds) {
          if (out) out += " ";
          out += `${oz}oz`;
        }
        return out;
      }
      return Math.round(100 * value / 453592) / 100;
    }
    return 0;
  }
  return {
    WeightToMg,
    MgToWeight
  };
})();

export { weightUtils as w };
//# sourceMappingURL=weight.mjs.map
