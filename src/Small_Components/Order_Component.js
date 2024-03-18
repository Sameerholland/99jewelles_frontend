import React from 'react'
import '../css/main.css'
export default function Order_Component({data}) {
   const arr = [];

   for(let i=0;i<data.rating;i++){
      arr.push(1);
   }
  return (
    <div className='grid grid-cols-3 mb-16 bg-light-orange-500'>
      
      <img src={data.thumbnail} className='p-12' />
      <div className='py-12'>
         <p className='  chathura-regular text-gray-green text-4xl'>{data.title}</p> 
         <div>
            {
               arr.map(()=>
                  <span className='text  text-dark-orange-1000 text-xl'>&#9733; </span>
               )
            }
            <span className='charmonman-regular text-dark-orange-1000'>{data.reviews} reviews</span>
         </div>
         <div className=''>
            <span className='l line-through pr-2 text-gray-green'>&#x20B9; {data.price}</span>
            <span className='pr-2 text-gray-green sansita-regular'> &#x20B9;{Math.round(data.price - (data.price*data.discountPercentage/100))}</span>
            <span className='text-dark-orange-1000 charmonman-regular text-sm'>{data.discountPercentage}% Save</span>
         </div>
         <div className='pt-2'>
            <span className="text-gray-green sansita-regular text-lg pr-1">Payment:-</span>
            <span className='text-dark-red sansita-regular'>{data.paymentMethod}</span>
         </div>
         <div  className='pt-2'>
            <span className="text-gray-green sansita-regular text-lg pr-1">Address:-</span>
            <span className='text-dark-red sansita-regular'>{data.Address}</span>
         </div>
         <div  className='pt-2'>
            <span className="text-gray-green sansita-regular text-lg pr-1">Contact:-</span>
            <span className='text-dark-red sansita-regular'>{data.Contact_Number}</span>
         </div>
         <button className='px-7 ml-12 mt-3 shadow-2xl sansita-regular rounded-full py-2 bg-sletiy'>Cancel</button>
      </div>
      <div className=' flex flex-col items-end pr-20 pt-12'>
      <div >

            <span className="text-gray-green sansita-regular text-lg pr-1">Delivery up-to:-</span>
            <span className='text-dark-red sansita-regular'>{data.expected_dilevery_date}</span>
         </div>
         <div className='pt-2'>
            <span className="text-gray-green sansita-regular text-lg pr-1">Ordered on :-</span>
            <span className='text-dark-red sansita-regular'>{data.dileverd_Date}</span>
         </div>
         <div className='pt-32'>
            <span className="text-gray-green sansita-regular text-lg pr-1 ">Status:- </span>
            <span className='text-dark-red sansita-regular'>{data.status}</span>
         </div>

      </div>
      
    </div>
  )
}
