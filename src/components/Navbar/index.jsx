
function Navbar() {
  return (
    <>
    <div className="flex items-center w-full">
    <nav className="flex w-full bg-white/0 shadow-lg">
    <ul className='flex ml-30 px-4 py-3 w-full font-barlow text-xl items-center justify-center py-4 gap-[4vw] font-medium text-black/90 cursor-pointer'>  
  <div className="ml-auto">
    <button className=" flex-initial px-4 py-2 items-end justify-center font-thin text-[rgb(237,214,255)] bg-gradient-to-r from-[#9474B4]/60 to-[#9474B4]/30 rounded-3xl hover:shadow-lg hover:shadow-[#857fb5]/20 transition-all duration-300 ease-in-out">
      Sign Out
    </button>
  </div>
</ul>

      {
        /* 
        <li className=' py-2 px-7 rounded-md hover:underline hover:text-black transition-all duration-700 ease-in-out '>
            Home
          </li>
          <li className=' py-2 px-7 rounded-md hover:underline hover:text-black transition-all duration-500 ease-in-out '>
            About us
          </li>
          <li className=' py-2 px-7 rounded-md hover:underline hover:text-black transition-all duration-200 ease-in-out '>
            Services
          </li>*/
      } 
       
         </nav>
         </div>
    </>

  )}

export default Navbar;