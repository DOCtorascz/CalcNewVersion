export {CalcBt};
import { calcClass } from '../../types/data';

const CalcBt = ({classN, options}: calcClass) => {
  return (
    <button className={classN}>{options}</button>
  );
};
