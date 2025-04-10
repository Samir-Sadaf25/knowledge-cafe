
import { useState } from 'react'
import './App.css'
import Blogs from './componants/blogs/Blogs'
import Navber from './componants/Navber/Navber'

function App() {
  
   const [bookmark,setBookmark] = useState([])
   const [reading,setReading] = useState(0);
    
  const handleBookmark = (blog) =>{
      // setBookmark([...bookmark,blog]);
      const newBookmark = [...bookmark,blog]
      setBookmark(newBookmark);
  }
  
  const handleRead = (time,id) =>{
     const newTime = reading+time;
     setReading(newTime);
    handleRemoveBookmark(id)
  }

  const handleRemoveBookmark = (id) =>{
      const remainingBookmark = bookmark.filter(marked => marked.id !== id);
      // console.log(remainingBookmark);
      setBookmark(remainingBookmark);
  }

  return (
    <>
      <Navber></Navber>
      
      <div>
        <div className="main-container flex text-center">
          <div className="left-container w-[70%] ">
            <Blogs handleBookmark={handleBookmark} handleRead={handleRead}></Blogs>
          </div>
          <div className="right-container w-[30%] ">
            <h1>reading time : {reading}</h1>
            <h1>bookmark count : {bookmark.length}</h1>
            {
              bookmark.map((marked) => <p className="bg-cyan-100 rounded-4xl p-2 mb-1.5" key={marked.id}>{marked.title}</p>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
