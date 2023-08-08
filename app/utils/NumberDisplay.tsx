"use client";
import numeral from "numeral";

const NumberDisplay = ({ value = 0 }: { value?: number }) => {
  const formattedNumber = formatNumber(value);
  return <span>{formattedNumber}</span>;
};

const formatNumber = (value: number) => {
  if (value >= 1000000) {
    return numeral(value / 1000000).format("0.a") + "M";
  } else if (value >= 1000) {
    return numeral(value / 1000).format("0.a") + "K";
  } else {
    console.log(value);

    return value.toString();
  }
};

export default NumberDisplay;
