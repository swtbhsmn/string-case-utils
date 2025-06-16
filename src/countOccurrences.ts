export function countOccurrences(str: string, substr: string): number {
  return (str.match(new RegExp(substr, 'g')) || []).length;
}