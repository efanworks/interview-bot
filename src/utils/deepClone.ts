/**
 * 深拷贝对象，支持循环引用、Date、RegExp、Map、Set、ArrayBuffer、TypedArray
 */
export function deepClone<T>(obj: T, hash = new WeakMap()): T {
  if (obj === null || typeof obj !== 'object') return obj;

  if (hash.has(obj)) return hash.get(obj);

  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags) as unknown as T;
  if (obj instanceof Map) {
    const clone = new Map();
    hash.set(obj, clone);
    obj.forEach((v, k) => clone.set(deepClone(k, hash), deepClone(v, hash)));
    return clone as unknown as T;
  }
  if (obj instanceof Set) {
    const clone = new Set();
    hash.set(obj, clone);
    obj.forEach(v => clone.add(deepClone(v, hash)));
    return clone as unknown as T;
  }
  if (obj instanceof ArrayBuffer) {
    const clone = obj.slice(0);
    hash.set(obj, clone);
    return clone as unknown as T;
  }
  if (ArrayBuffer.isView(obj) && !(obj instanceof DataView)) {
    const Ctor = obj.constructor as new (buffer: ArrayBuffer) => ArrayBufferView;
    const clone = new Ctor(obj.buffer.slice(0) as ArrayBuffer);
    hash.set(obj, clone);
    return clone as unknown as T;
  }

  if (Array.isArray(obj)) {
    const clone: unknown[] = [];
    hash.set(obj, clone);
    obj.forEach((item, i) => clone[i] = deepClone(item, hash));
    return clone as unknown as T;
  }

  const clone = Object.create(Object.getPrototypeOf(obj)) as T;
  hash.set(obj, clone);
  for (const key of Reflect.ownKeys(obj)) {
    const desc = Object.getOwnPropertyDescriptor(obj, key);
    if (desc) {
      if ('value' in desc && typeof desc.value === 'object' && desc.value !== null) {
        desc.value = deepClone(desc.value, hash);
      }
      Object.defineProperty(clone, key, desc);
    }
  }

  return clone;
}
