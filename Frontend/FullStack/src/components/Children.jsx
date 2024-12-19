import React from 'react'
import children from '../../public/children.json'
import Cards from './Cards';

function Children() {
                const filterData = children.filter((data) => data.category === "children");
  console.log(filterData);

  return (
<>
<div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 text-center items-center justify-center">
          <h1 className="text-1xl md:text-3xl font-bold">
            Welcome to the world of Children Books
          </h1>
        </div>

        {/* =============================cards================================================= */}

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}




          
        </div>
      </div>
</>
  )
}

export default Children
