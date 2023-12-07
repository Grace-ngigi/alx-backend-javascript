export default function hasValuesFromArray(aSet, anArray) {
  return anArray.every((item) => aSet.has(item));
}
