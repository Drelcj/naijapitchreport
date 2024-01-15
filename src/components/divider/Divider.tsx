import React from 'react'

const Divider = () => {
  return (
    <div>
        <div className="flex w-full shadow-xs my-4 sm:my-6 md:my-12">
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">AFCON23 </div>
  <div className="divider divider-horizontal">OR</div>
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">NPFL</div>
</div>
<p className="flex justify-center rounded-md shadow-lg mb-6 text-2xl animate-pulse"> We got you covered.</p>
    </div>
    
  )
}

export default Divider