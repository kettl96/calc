import React, { useState } from "react";
import s from './../Operators/Operators.module.css'

const Operators = ({create}) => {
  const [operator, setOperator] = useState('')
  const getOperator = (target) => {
    let sign = target.innerHTML
    create(sign)
    console.log(operator);
  }
  return (
    <div>
      <div className={s.wrapper} onClick={e=>getOperator(e.target)}>
        <div>+</div>
        <div>-</div>
        <div>*</div>
        <div>/</div>
      </div>
    </div>
  )
}

export default Operators