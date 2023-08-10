export {CalcBt, classNameContext};
import { calcOptions, calcClass } from '../../types/data';
import { createContext, useContext } from 'react';

const classNameContext = createContext('main-calc__parametrs-base__bt btn');

const CalcBt = ({options}: calcOptions) => {
  const nameClassChild = useContext<string>(classNameContext);

  return (
    <button onClick={(event) => console.log(event.target)} className={nameClassChild}>{options}</button>
  );
};
