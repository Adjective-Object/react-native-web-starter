export function objectMap(obj, fn) {
  const newObj = {};
  for (const key in obj) {
    [ newKey, newObject ] = fn(key, obj[key]);
    newObj[newKey] = newObject;
  }
  return newObj;
}

export function merge(a, b) {
  return Object.assign(Object.assign({}, a), b);
}

export function isSimpleObject(obj) {
  return obj instanceof Object &&
    (Object.getPrototypeOf(obj) == Object.prototype ||
      Object.getPrototypeOf(obj) == Array.prototype);
}

export function deepMerge(a, b) {
  if (Array.isArray(a)) {
    a = a.slice();
  } else {
    a = Object.assign({}, a);
  }

  for (let key of Object.getOwnPropertyNames(b)) {
    if (isSimpleObject(b[key]) && isSimpleObject(a[key])) {
      a[key] = deepMerge(a[key], b[key]);
    } else {
      a[key] = b[key];
    }
  }

  return a;
}
