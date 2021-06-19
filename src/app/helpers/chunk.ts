export const chunk = <T extends Array<object>>(arr: T, size: number) => {
  const splitArr = [];

  for (let i = 0; i < arr.length; i += 0) {
    const sliced = arr.slice(i, size);
    splitArr.push(sliced);
    arr.splice(0, size);
  }
  return splitArr;
};
