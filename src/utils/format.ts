export type MoneyInput = string | number;
import { isValid } from "./valid";

const formatMoney = (input: MoneyInput) => {
  if (!isValid(input)) {
    return "0";
  }
  input = input.toString();
  const pos = input.indexOf(".");
  const left = input.substring(0, pos);
  let right = input.substring(pos + 1);
  if (right.length == 1) {
    right = right + "0";
  }

  if (left.length === 0) {
    return `.${right}`;
  }

  return `$${left}.${right}`;
};

export type FormatDate = string | Date;

const formatDate = (d: FormatDate) => {
  if (typeof d === "undefined") return "";
  if (d === null) return "";
  if (Object.prototype.toString.call(d) == "[object Date]") {
    // @ts-ignore
    if (isNaN(d.getTime())) {
      return "";
    }
  }
  d = d.toString();
  const date = new Date(d);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return month + "/" + day + "/" + year;
};

export { formatMoney, formatDate };
