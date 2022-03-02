export type IsValidType = number | string | Date | Object;

const isValid = (v: IsValidType) => {
  if (typeof v === "undefined" || v === null) return false;

  if (typeof v === "string") {
    if (v.length === 0) return false;
  }

  if (typeof v === "object") {
    if (Object.keys(v).length === 0) return false;
  }

  if (typeof v === "number") {
    if (v === 0) return false;
  }

  return true;
};

export { isValid };
