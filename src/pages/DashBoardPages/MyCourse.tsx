import React from 'react'

const MyCourse = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-center mt-10">My Courses</h1>
        <p className="text-center text-gray-600 mt-2">Continue your learning journey.</p>
        {/* Add course cards or list here */}
        <div className="mt-10 flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-3/4">
                <h2 className="text-xl font-semibold mb-4">Course List</h2>
                {/* Example course item */}
                <div className="border-b pb-4 mb-4">
                    <h3 className="text-lg font-medium">Course Title 1</h3>
                    <p className="text-gray-500">Description of the course.</p>
                </div>
                {/* Add more courses as needed */}
            </div>
            </div>
        
    </div>
  )
}

export default MyCourse