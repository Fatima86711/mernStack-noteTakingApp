import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router'
import api from '../lib/axios.js';

const CreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!title.trim() || !content.trim()){
      toast.error("All Fields are Required...")
      return;
    }
    setLoading(true);
    try{
      const data = await api.post("/notes",{
        title,
        content
      })
      console.log("post method's data we sent through ui: ", data);
      toast.success("Note Created Successfully!")
      navigate('/')
    }catch(err){
      if(err.response?.status===429){
        toast.error("Slow Down!",{
          duration:4000,
          icon:"💀"
        })
      }
      else{
      toast.error("Error Creating Note ")
      console.log(err)
      }
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8' >
        <div className='max-w-2xl mx-auto' >
          <Link to={'/'} className='btn btn-gost mb-6' >
          <ArrowLeftIcon className='size-5' />
          Back to Notes
          </Link>
          <div className='card bg-base-100 border-1 border-base-content/20' >
            <div className='card-body' >
              <h2 className='card-title text-2xl mb-4' >Create New Note</h2>
              <form onSubmit={handleSubmit} >
                <div className='form-control mb-4 flex flex-col' >
                  <label className='label mb-1'>
                    <span className='text-warning-content/80 font-medium' >Title</span>
                  </label>
                  <input type="text"
                   placeholder='Note Title'
                   className='input input-bordered w-full'
                   value={title}
                   onChange={(e)=>{setTitle(e.target.value)}}
                  />
                </div>
                <div className='form-control mb-4 flex flex-col' >
                  <label className='label mb-1'>
                    <span className='text-warning-content/80 font-medium' >Content</span>
                  </label>
                  <textarea 
                   placeholder='Write your note here... '
                   className='textarea p-3 textarea-bordered w-full h-32'
                   value={content}
                   onChange={(e)=>{setContent(e.target.value)}}
                  />
                </div>
                <div className='card-actions justify-end' >
                  <button type='submit' className='btn btn-primary' disabled={loading} >
                    {loading? 'Creating...' : "Create Note"}
                    </button>  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage