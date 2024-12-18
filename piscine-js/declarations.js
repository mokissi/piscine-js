const escapeStr = "`, \\, /, \", '"
const arr = [4, '2']
const obj = {
  str: "med",
  num: 42,
  bool: true,
  undef: undefined
};

const nested = {
  arr: [4, undefined, '2'],
  obj: {
    str: "ks",
    num: 7,
    bool: false
  }
};

Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
Object.freeze(arr);
Object.freeze(obj);
