import React from 'react'
import non from "../../public/non.json";
import Cards from './Cards';

function NonFiction() {
                const filterData = non.filter((data) => data.category === "NonFiction");
  console.log(filterData);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 text-center items-center justify-center">
          <h1 className="text-1xl md:text-3xl font-bold">
            Welcome to the world of Fictional Books
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

export default NonFiction
