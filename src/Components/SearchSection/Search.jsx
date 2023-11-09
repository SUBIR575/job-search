import {AiOutlineSearch,AiOutlineCloseCircle,AiOutlineHome} from 'react-icons/ai';
import {BiMap} from 'react-icons/bi'
const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
    <form action="">
     <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
     <div className="flex gap-2 items-center">
     <AiOutlineSearch  className='text-[25px] icon'/>
     <input type='text' className=' bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here'/>
     <AiOutlineCloseCircle className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
     </div>

     <div className="flex gap-2 items-center">
     <AiOutlineHome  className='text-[25px] icon'/>
     <input type='text' className=' bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Company...'/>
     <AiOutlineCloseCircle className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
     </div>

     <div className="flex gap-2 items-center">
     <BiMap  className='text-[25px] icon'/>
     <input type='text' className=' bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Address'/>
     <AiOutlineCloseCircle className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
     </div>

     <button className=' bg-blueColor cursor-pointer rounded-[10px] h-full p-5 px-10 text-white hover:bg-blue-300 '>Search</button>
     </div>
    </form>
    <div className="secDiv flex justify-center items-center gap-10">
     <div className="singleSearch flex items-center gap-2">
     <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort By:</label>
     <select name='' id='relevance' className=' bg-white px-4 py-1 rounded-[3px]'>
      <option value="">One</option>
      <option value="">Two</option>
      <option value="">Three</option>
      <option value="">Four</option>
     </select>
     </div>

     <div className="singleSearch flex items-center gap-2">
     <label htmlFor='type' className='text-[#808080] font-semibold'>Type:</label>
     <select name='' id='type' className=' bg-white px-4 py-1 rounded-[3px]'>
      <option value="">One</option>
      <option value="">Two</option>
      <option value="">Three</option>
      <option value="">Four</option>
     </select>
     </div>

     <div className="singleSearch flex items-center gap-2">
     <label htmlFor='level' className='text-[#808080] font-semibold'>Level:</label>
     <select name='' id='level' className=' bg-white px-4 py-1 rounded-[3px]'>
      <option value="">One</option>
      <option value="">Two</option>
      <option value="">Three</option>
      <option value="">Four</option>
     </select>
     </div>
     <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
    </div>
    </div>
  )
}

export default Search