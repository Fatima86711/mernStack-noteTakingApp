import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import RateLimitedUi from '../components/RateLimitedUi'
import axios from 'axios';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios.js';
import NotesNotFound from './NotesNotFound.jsx';

const HomePage = () => {
 const [isLimitCrossed, setIsLimitCrossed] = useState(false);
 const [notes, setNotes] = useState([]);
 const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
      const fetchNotes=async()=>{
      try{
          const res = await api.get("/notes")
          console.log(res.data)
          setNotes(res.data)
          setIsLimitCrossed(false);
      }catch(err){
        console.log(err.response);
        if(err.response.status ===429){
          setIsLimitCrossed(true);

        }else{
          toast.error("Failed to load the Notes.")
        }
      }finally{
        setLoading(false);
      }
  };
  fetchNotes();
  
  },[])
  
  return (
  <div className='min-h-screen  mx-auto'  >
  <Navbar/>
  {isLimitCrossed && <RateLimitedUi/>}
  {isLoading &&
  <div className='flex justify-center mt-6'> <div className='py-6 text-base-content  text-2xl'>Notes Loading...</div></div> 
  }
  {notes.length===0 && !isLimitCrossed && !isLoading && <NotesNotFound/>  }
  {
  notes.length>0 && !isLimitCrossed &&
     <div className='flex justify-center px-4 py-6'>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl'>
        {notes.map((note)=>(
          <NoteCard key={note._id} note={note} setNotes = {setNotes}  />
        ))}
      </div>
    </div>
  }
  </div>
  )
}

export default HomePage


