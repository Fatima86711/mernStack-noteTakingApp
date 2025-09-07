import React from 'react'
import { Link } from 'react-router'
import {PlusIcon} from 'lucide-react'
const Navbar = () => {
    
  return (
    <header className=' bg-neutral-content   '>
        <div className='mx-auto max-w-6xl  py-4'>
            <div className='flex justify-around items-center gap-4'>
                <h1 className='font-mono  text-3xl font-bold tracking-tighter '>
                    NoteBook
                </h1  >
                <Link to= {"/create"} className='btn btn-primary' >
                <PlusIcon className='size-5'/>
                
                <span>New Note</span>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar