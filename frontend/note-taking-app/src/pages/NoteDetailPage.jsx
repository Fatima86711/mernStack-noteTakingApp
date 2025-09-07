import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);
useEffect(()=>{
const fetchNote = async ()=>{
  try{
    setLoading(true);
    const res = await api.get(`/notes/${id}`);
    console.log("Note is fetched", res.data.message)
    setNote(res.data.message);
    
  }catch(err){
    if(err.response?.status===429){
      toast.error("Slow down",{
          duration:4000,
          icon:"💀"
        });
    }else{
      console.log("Error in fetching note", err)
    toast.error("Failed to fetch the note.")
    }
  }finally{
    setLoading(false);
  }
}
fetchNote();
},[id]);
 const handleDelete =async (e)=>{
    e.preventDefault();
   if (!window.confirm("Do you want to Delete the Note.")) return;
    try{
        
            await api.delete(`/notes/${note._id}`);
        toast.success("Note Deleted Successfully.")
        navigate("/")
    }catch(err){
        console.log(err);
        toast.error("Failed to Delete the Note.")
    }
   }
const handleSave =async()=>{
if(!note.title.trim() || !note.content.trim() ){
  toast.error("Please add a title or content.")
  return;
}
setSaving(true);
try{
  await api.put(`/notes/${id}`,note);
  toast.success("Note Updated Successfully.")
  navigate("/")

}catch(err){
        console.log(err);
        toast.error("Failed to Delete the Note.")

}finally{
  setSaving(false)
}

}

  if(loading){
    return(<div className='min-h-screen bg-base-200 flex items-center justify-center'>
  <LoaderIcon className='animate-spin size-10'/> 
</div>)
  }
  return (
    <div className='min-h-screen bg-base-200' >
      <div className='container mx-auto px-4 py-8' >
        <div className="max-w-2xl mx-auto">
        <div className='flex items-center justify-between mb-6' >
          
          <Link to="/" className="btn text-base-content btn-ghost" >
          <ArrowLeftIcon className='h-5  w-5'/> Back to Notes
          </Link>
       <button onClick={handleDelete} className='btn btn-error btn-outline' > <Trash2Icon className='h-5 w-5'/> Delete Note </button>
      </div>
      <div className='card border border-base-content/10 bg-base-100'>
        <div className="card-body">
          <label  className="label">
            <span className='label-text font-medium'>Title</span>
          </label>
          <input
          type='text'
          placeholder='Note Title'
          className='input input-bordered w-full'
          value={note.title}
          onChange={(e)=>setNote({...note, title:e.target.value})}
          ></input>
  
        
          <label htmlFor="" className="label">
            <span className='label-text font-medium'>Content</span>
          </label>
          <textarea
          placeholder='Write your note here...'
          className='textarea textarea-bordered h-32 w-full'
          value={note.content}
          onChange={(e)=>setNote({...note, content:e.target.value})}
          ></textarea>
           <div className='card-actions mt-3 justify-end'>
        <button className='btn btn-primary' disabled={saving} onClick={handleSave} >
          {saving? "Saving...": "Save Changes"}
        </button>
        </div>
        </div>
       
      </div>
      

      </div>
      
      
      
      
      
      </div>
      
      
      
      
      
      
      </div>
  )
}

export default NoteDetailPage