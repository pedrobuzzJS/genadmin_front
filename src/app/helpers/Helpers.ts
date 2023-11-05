export function arr(arr: any) {
  let type = typeof arr;
  if (type === 'string' || type === 'number' || type === "object")
      arr = [arr];

  return arr;
}