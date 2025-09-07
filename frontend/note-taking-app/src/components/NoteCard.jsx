import React from 'react'
import { Link } from 'react-router'
import NoteDetailPage from '../pages/NoteDetailPage'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import toast from 'react-hot-toast'
import api from '../lib/axios'

const NoteCard = ({note, setNotes}) => {
   const handleDel =async (e)=>{
    e.preventDefault();
   if (!window.confirm("Do you want to Delete the Note.")) return;
    try{
        
            await api.delete(`/notes/${note._id}`);
            setNotes((prev)=>(prev.filter(filternote => filternote._id !== note._id)))
        toast.success("Note Deleted Successfully.")
    }catch(err){
        console.log(err);
        toast.error("Failed to Delete the Note.")
    }
   }
  return (
    <Link to={`/note/${note._id}`} className='card w-80 h-48 bg-base-100 hover:shadow-lg transition-all duration-200 border-t-5  border-t-solid border-neutral border-b-base-content/20 border-b-1 border-b-style-none border-l-base-content/20 border-l-1 border-l-style-none border-r-base-content/20 border-r-1  border-r-style-none'>
        <div className='card-body p-6' >
            <h3 className='card-title card-base-content' >{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3' >{note.content}</p>
            <div className='cards-actions flex justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60' >{formatDate(new Date(note.createdAt))}</span>
                <div className='flex items-center gap-1' >
                    <PenSquareIcon className='size-4'/>
                    <button onClick={(e)=>handleDel(e)} className='btn btn-ghost btn-xs text-error' >
                        <Trash2Icon className='size-4'/>
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard