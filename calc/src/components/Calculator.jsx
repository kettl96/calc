import React, { useState } from "react";
import s from './Calculator.module.css'
import Operators from "./Operators/Operators";

function Calculator() {
  const [number, setNumber] = useState(0)
  const getNumber = (target) => {
    let numTarget = target.innerHTML
    setNumber(numTarget)
  }

  return (
    <div className={s.main__container}>
      <div>
        <div className={s.calcArea}>
          {number}
        </div>
        <div className={s.wrapper} onClick={e => getNumber(e.target)}>
          <div className={s.btn__container}>
            <div className={s.btn}>1</div>
          </div>
          <div className={s.btn__container}>
            <div className={s.btn}>2</div>
          </div>
          <div className={s.btn__container}>
            <div className={s.btn}>3</div>
          </div>
          <div className={s.btn__container}>
            <div className={s.btn}>4</div>
          </div>
          <div className={s.btn__container}>
            <div className={s.btn}>5</div>
          </div>
          <div className={s.btn__container}>
            <div className={s.btn}>6</div>
          </div>
          <div className={s.btn__container}>
            <div className={s.btn}>7</div>
          </div>
          <div className={s.btn__container}>
            <div className={s.btn}>8</div>
          </div>
          <div className={s.btn__container}>
            <div className={s.btn}>9</div>
          </div>
        </div>
      </div>
      <Operators />
    </div>
  )
}
export default Calculator