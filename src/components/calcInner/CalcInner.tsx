export { CalcInner };
import './calcInner.css';
import { CalcBt } from '../calculatorBT/CalcBt';
import { MainCalcOptions } from './main-calcParametrs';

function CalcInner() {
  return (
    <main className="main-calc">
      <div className="container">
        <div className="main-calc__inner">
          <div className="main-calc__result">
            <span className="main-calc__result-num">0</span>
          </div>
          <div className="main-calc__parametrs">
            <div className="main-calc__parametrs-num" >
              <MainCalcOptions nameClassParent={'main-calc__parametrs-num__up-param'} nameClassChild={'main-calc__parametrs-num__bt btn'}>
                <CalcBt options={'AC'} />
                <CalcBt options={'+/-'} />
                <CalcBt options={'%'} />
              </MainCalcOptions>
              <MainCalcOptions nameClassParent={'main-calc__parametrs-num__up-param'} nameClassChild={'main-calc__parametrs-num__bt btn'}>
                <CalcBt options={1} />
                <CalcBt options={2} />
                <CalcBt options={3} />
              </MainCalcOptions>
              <MainCalcOptions nameClassParent={'main-calc__parametrs-num__up-param'} nameClassChild={'main-calc__parametrs-num__bt btn'}>
                <CalcBt options={4} />
                <CalcBt options={5} />
                <CalcBt options={6} />
              </MainCalcOptions>
              <MainCalcOptions nameClassParent={'main-calc__parametrs-num__up-param'} nameClassChild={'main-calc__parametrs-num__bt btn'}>
                <CalcBt options={7} />
                <CalcBt options={8} />
                <CalcBt options={9} />
              </MainCalcOptions>
              <MainCalcOptions nameClassParent={'main-calc__parametrs-num__up-param'} nameClassChild={'main-calc__parametrs-num__bt btn'}>
                <CalcBt options={0} />
                <CalcBt options={'.'} />
              </MainCalcOptions>
            </div>
            <MainCalcOptions nameClassParent={'main-calc__parametrs-base'} nameClassChild={'main-calc__parametrs-base__bt btn'}>
              <CalcBt options={'÷'} />
              <CalcBt options={'x'} />
              <CalcBt options={'-'} />
              <CalcBt options={'+'} />
              <CalcBt options={'='} />
            </MainCalcOptions>
          </div>
        </div>
      </div>
    </main >
  );
}