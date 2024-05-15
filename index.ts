console.log("Hi");

interface Arg {
  Prop1: string;
  Prop2: string;
}

let doSomething = (arg: Arg) => {
  console.log(arg);
};

doSomething({ Prop1: "one prop", Prop2: "two prop" });
