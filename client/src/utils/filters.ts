export function validValueFilter<T extends { [key: string]: unknown }>(
  obj: T,
): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== null),
  ) as T;
}
