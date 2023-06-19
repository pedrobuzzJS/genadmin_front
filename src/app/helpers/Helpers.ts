export function toArray(arr: any) {
  let type = typeof arr;
  if (type === 'string' || type === 'number')
      arr = [arr];

  return arr;
}