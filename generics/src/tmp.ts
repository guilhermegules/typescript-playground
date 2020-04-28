const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

const l2 = last<string>(["a", "b", "c"]);

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr("A", "B");
const v3 = makeArr<string | null>("a", 6);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const m = makeFullName({ firstName: "Guilherme", lastName: "Gules" });

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
