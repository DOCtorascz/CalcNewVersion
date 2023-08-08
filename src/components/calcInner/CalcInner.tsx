export { CalcInner };
import './calcInner.css';
import { CalcBt } from '../calculatorBT/CalcBt';

function CalcInner() {
  return (
    <main className="main-calc">
      <div className="container">
        <div className="main-calc__inner">
          <div className="main-calc__result">
            <span className="main-calc__result-num">0</span>
          </div>
          <div className="main-calc__parametrs">
            <div className="main-calc__parametrs-num">
              <div className="main-calc__parametrs-num__up-param">
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={'AC'} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={'+/-'} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={'%'} />
              </div>
              <div className="main-calc__parametrs-num__one-row row">
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={1} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={2} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={3} />
              </div> 
              <div className="main-calc__parametrs-num__two-row row">
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={4} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={5} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={6} />
              </div>
              <div className="main-calc__parametrs-num__three-row row">
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={7} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={8} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={9} />
              </div>
              <div className="main-calc__parametrs-num__four-row row">
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={0} />
                <CalcBt classN={'main-calc__parametrs-num__bt btn'} options={'.'} />
              </div>
            </div>
            <div className="main-calc__parametrs-base">
              <CalcBt classN={'main-calc__parametrs-base__bt btn'} options={'÷'} />
              <CalcBt classN={'main-calc__parametrs-base__bt btn'} options={'x'} />
              <CalcBt classN={'main-calc__parametrs-base__bt btn'} options={'-'} />
              <CalcBt classN={'main-calc__parametrs-base__bt btn'} options={'+'} />
              <CalcBt classN={'main-calc__parametrs-base__bt btn'} options={'='} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}