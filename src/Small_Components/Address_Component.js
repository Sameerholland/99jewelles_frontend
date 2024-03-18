import React from 'react'

export default function Address_Component({data}) {
  return (
   <div className='grid grid-cols-3 mb-16 py-12 bg-light-orange-500'>
      
     
      
      <div className=' flex flex-col  px-8 pt-4'>
      <div >

            <span className="text-gray-green sansita-regular text-base pr-1">Name:-</span>
            <span className='text-dark-red sansita-regular'>{data.Name}</span>
         </div>
         <div className='pt-2 '>
            <span className="text-gray-green sansita-regular text-sm pr-1">Primary Contact Number :-</span>
            <span className='text-dark-red sansita-regular'>{data.Primary_Contact_Number}</span>
         </div>
         <div className='pt-2'>
            <span className="text-gray-green sansita-regular text-sm pr-1 ">Secondary Contact Number:- </span>
            <span className='text-dark-red sansita-regular'>{data.Secondary_Contact_Number}</span>
         </div>

      </div>
      <div className=' flex flex-col items-end px-8 pt-4'>
      <div >

            <span className="text-gray-green pt-1 sansita-regular text-base pr-1">Street:-</span>
            <span className='text-dark-red sansita-regular'>{data.Street}</span>
         </div>
         <div className='pt-2 '>
            <span className="text-gray-green pt-1 sansita-regular text-sm pr-1">District:-</span>
            <span className='text-dark-red sansita-regular'>{data.District}</span>
         </div>
         <div className='pt-2'>
            <span className="text-gray-green pt-1 sansita-regular text-sm pr-1 ">State:- </span>
            <span className='text-dark-red sansita-regular'>{data.State}</span>
         </div>
         <div className='pt-2'>
            <span className="text-gray-green pt-1 sansita-regular text-sm pr-1 ">ZipCode:- </span>
            <span className='text-dark-red sansita-regular'>{data.Pincode}</span>
         </div>
         

      </div>
      <div className=' flex flex-col  px-8 pt-4'>
     <button className='bg-gray-green text-white mx-12 py-2 mb-4 rounded-full '>Edit Address</button>
     <button className='text-gray-green bg-white mx-12 py-2 rounded-full '>Delete Address</button>


      </div>
      
    </div>
  )
}
