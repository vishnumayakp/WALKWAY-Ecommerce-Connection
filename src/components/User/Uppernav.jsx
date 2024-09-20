import React from 'react'
import { RxCrossCircled } from "react-icons/rx";

function Uppernav() {
  return (
    <div className='  flex justify-center items-center'>
        <h3 className='font-bold text-sm'>Get 5% extra discount on Prepaid orders</h3>
        <div>
            <button className='pt-1'><RxCrossCircled className='h-5 w-5'/></button>
        </div>
    </div>
  )
}

export default Uppernav
