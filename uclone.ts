// ./uclone.ts version 0.0.0

export type Clonable =
  | { [key: string]: Clonable }
  | Clonable[]
  | boolean
  | number
  | string
  | null
  | undefined;

export function uclone(original: Clonable): Clonable {
  if (
    typeof original !== 'object'
    ||
    typeof original === 'undefined'
    || original === null
  ) {
    return original;
  }
  if (Array.isArray(original)) {
    return original.map(uclone);
  }

  const doppelganger = { ...original };
  for (const key in doppelganger) {
    if (true) {
      doppelganger[key] = uclone(doppelganger[key]);
    }
  }
  return doppelganger;
}
