import React from 'react'

const Skeleton = () => {
  return (
    <div>
      
<div className="w-[270px] rounded-2xl shadow-md p-4 bg-white">

      {/* Image */}
      <div className="h-44 bg-gray-200 rounded-xl relative overflow-hidden">
        <div className="shimmer"></div>
      </div>

      {/* Title */}
      <div className="mt-4 h-4 w-3/4 bg-gray-200 rounded relative overflow-hidden">
        <div className="shimmer"></div>
      </div>

      {/* Text */}
      <div className="mt-3 h-3 bg-gray-200 rounded relative overflow-hidden">
        <div className="shimmer"></div>
      </div>

      <div className="mt-2 h-3 w-5/6 bg-gray-200 rounded relative overflow-hidden">
        <div className="shimmer"></div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 mt-5">
        

        <div className="flex-1">
          <div className="h-3 w-1/2 bg-gray-200 rounded mb-2 relative overflow-hidden">
            <div className="shimmer"></div>
          </div>

          <div className="h-3 w-2/3 bg-gray-200 rounded relative overflow-hidden">
            <div className="shimmer"></div>
          </div>
        </div>
      </div>

    </div>


    </div>
  )
}

export default Skeleton
