import React from 'react'

const Transaction = ({id, amount, text, delTransaction}) => {
   const sign = amount < 0 ? '-' : '+'
  return (
    <div className="new-transact">
       <li className={amount < 0 ? "minus" : "plus"}>
         {text}{" "}
         <span className='history-transact'>
           {sign}${Math.abs(amount)}
         </span>
         <button className='btn-cancel' onClick={()=>delTransaction(id)}>x</button>
       </li>
    </div>
  );
}

export default Transaction