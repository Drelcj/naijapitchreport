import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex justify-center my-4 sm:my-6 md:my-12 hover:shadow-hover">
        <div className="join">
  <input className="input input-bordered join-item" placeholder="Email"/>
  <button className="btn join-item rounded-r-full">Subscribe</button>
</div>
    </div>
  )
}

export default Newsletter