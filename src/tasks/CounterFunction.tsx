import { FC } from 'react';

const CounterFunction: FC = (): JSX.Element => {
   const counter = (num?: number): [Function, Function] => {
      let initialNumber = num ? num : 0;
      return [
         () => initialNumber,
         () => {
            initialNumber = initialNumber + 1;
         },
      ];
   };

   const [getA, nextA] = counter(1);
   console.log(getA());
   nextA();
   console.log(getA());

   const [getB, nextB] = counter(10);
   nextB();
   console.log(getA());
   console.log(getB());
   nextA();
   console.log(getA());
   console.log(getB());

   return <h1>Counter function</h1>;
};

export default CounterFunction;
