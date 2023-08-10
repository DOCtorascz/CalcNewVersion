export { MainCalcOptions };
import { classNameContext } from '../calculatorBT/CalcBt';
import { calcClass } from '../../types/data';

function MainCalcOptions({nameClassChild, children, nameClassParent}: calcClass) {
  return (
    <div className={nameClassParent}>
      <classNameContext.Provider value={nameClassChild}>
        {children}
      </classNameContext.Provider>
    </div>
  );
}
