import React from 'react'

function Home() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto  '>

    <div className='relative back  bookvideo '>
        {/* img */}
        <video src="images/books.mp4" autoPlay muted loop classname=''></video>
    </div>

    <div className='welcome'>
      <h1 className='line1 text-1xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-5 sm:mt-10 '>
      <span className='text-white'> Every book you buy  </span>
      </h1>
      <p className='line2 text-1xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-5 sm:mt-10'>
      teaches someone else to read 
      </p>
      <br></br>
    </div>

    {/* line */}
    <div className='para'>
    <p className="lg:text-xl"><i> "I think books are like people,  in the sense that they’ll turn up in your life when you most need them."<br/><b> – Emma Thompson</b> </i></p>
    </div>



    <button className='firstsecbtn '>Find New Books</button>

  </div>




   {/*========================================== section2========================= */}
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex gap-20  flex-col md:flex-col mt-12  md:mt-32  lg:flex-row mb-20 '>
    <div className='order-2 w-full   ' >
    <p className="font-bold lg:text-4xl">BOOKS.....  </p>
    <br></br>
    <br></br>

    <p className="lg:text-2xl md:text-1xl flexpara ">Books are man’s best friends. Books are portable and so they are easy to carry around. And so books can be read at any time night or day, while travelling on a bus or train or flight, and at meal time too. Books are published in many languages and in varied genres. There are books in fiction and non-fiction categories. Each of these categories has many different sections and genres, and there are many thousands of titles in each type.
      <br></br>
      
      <p className= " " > Books are timeless treasures that open doors to knowledge, imagination, and understanding. They serve as windows to different worlds, perspectives, and experiences, offering a sanctuary for the curious mind. A book can be a friend, a teacher, or a guide, encouraging growth and transformation. Each page holds the power to enlighten, entertain, and empower.</p>
    </p>

    <br>
    </br>

    </div>
    <div className='order-1 w-full md:w-1/2 ' >
    <img src='images/tree.png' className='treeimage' alt='image'></img>
    </div>

   </div>




  {/* section3
  
  Off section
  */}

  
   </>
  )
}

export default Home