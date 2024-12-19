import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 mb-20">
        <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="h-96 overflow-hidden"> {/* Increased height to h-64 */}
            <img 
              src={item.image} 
              alt="books" 
              className="w-64 h-full object-cover" // Full width, full height, cover
            />
          </figure>
          <div className="card-body">
            <h6 className="card-title ">
              {item.name}
              <div className="badge badge-secondary">
                {item.category}
              </div>
            </h6>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs. {item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;