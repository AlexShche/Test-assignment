import React, { FC, useState } from 'react';

export const Parent: FC = () => {
   const [count, setCount] = useState(0);
   const [extraA, setExtraA] = useState(1);
   const [extraB, setExtraB] = useState(2);
   return (
      <>
         <br />
         <br />
         <h1>Props drilling</h1>
         <LayerA count={count} setCount={setCount} extraA={extraA} extraB={extraB} />
      </>
   );
};
/**
 * LAYER A -------------------------------------------------
 */
type LayerAProps = {
   count: number;
   setCount: (value: number) => void;
   extraA: number;
   extraB: number;
};
const LayerA: FC<LayerAProps> = ({ count, setCount, extraA, extraB }) => {
   return (
      <div>
         <LayerB count={count} setCount={setCount} extraB={extraB} />
         <div>{extraA}</div>
      </div>
   );
};
/**
 * LAYER B -------------------------------------------------
 */
type LayerBProps = {
   count: number;
   setCount: (value: number) => void;
   extraB: number;
};
const LayerB: FC<LayerBProps> = ({ count, setCount, extraB }) => {
   return (
      <div>
         <Child count={count} setCount={setCount} />
         <div>{extraB}</div>
      </div>
   );
};
/**
 * LAST CHILD ----------------------------------------------*/
type ChildProps = {
   count: number;
   setCount: (value: number) => void;
};
const Child: FC<ChildProps> = ({ count, setCount }) => {
   return (
      <>
         <p>{count}</p>
         <button onClick={() => setCount(count + 1)}>Inc</button>
      </>
   );
};

// answers

// 1. Huge number of nested props, by clicking on the "Inc" button,
// all components are re-rendered, despite the fact that the count
// variable is used only in the "Child" component

// 2. to avoid so much nesting of props and re-rendering components on click "Inc"
// button it's better to use React.Context or some kind of state manager (redux).

// 3. Props drilling
// pluses - if you do not have a large nesting of components,
// then you can use passing data to child elements through props,
// it will take less written code and time and is easy to understand for novice developers
// minuses - cons - if you need to pass props through several nested components, it is not clear
// where certain props came from and this can often confuse the developer, he will search for a chain
// of nesting for a long time
//
// use React.Context or redux
// pluses - in this case, React.context is perfect, it allows you to wrap all the
// components you need in contexts and will store the necessary state inside itself
// that you can get from there in any wrapped component, for example, it can be used for the application theme
// redux - with redux, in general, everything is just a special single
// storage of your application state, it has such entities as reducers - they store and
// change the state, and the state changes inside the reducers using actions
// (which you can call to change this or that state)
//
// minuses - and React.Context and redux need to be set up it will take some time and
// some more time to understand how it works
