import React, { FC, useReducer, useState } from 'react';

const SomeOtherComponent: FC = () => {
   return <h1>SomeOtherComponent</h1>;
};

export const Parent1: FC = () => {
   const [visible, setVisible] = useState<boolean>();

   return (
      <div>
         <br/>
         <br/>
         <h1>Passing data to parent components</h1>
         <Child passOpen={setVisible} />
         {visible && <SomeOtherComponent />}
      </div>
   );
};

type ChildProps = {
   passOpen: (open: boolean) => void;
};

const Child: FC<ChildProps> = ({ passOpen }) => {
   const [open, toggleOpen] = useReducer((value) => !value, false);

   const handleToggle = (open: boolean) => {
      passOpen(!open);
      toggleOpen();
   };

   return (
      <div>
         <button onClick={() => handleToggle(open)}>Toggle</button>
      </div>
   );
};

// above showed one of the ways to solve this problem, you can also solve it
// with the help of redux just store the current state inside and get them when
// necessary and change them using action-creators
