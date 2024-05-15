import React from 'react'
import { CustumButonprops } from './types'

export const CustumButton = ({title , containerStyles , handelClick ,btnType}: CustumButonprops) => {
    console.log(containerStyles)
  return (
   <button 
   className={containerStyles} 
   disabled={false} 
   type={btnType || 'button'} 
   onClick={()=>{handelClick}}>
    {title}
   </button>
  )
}
