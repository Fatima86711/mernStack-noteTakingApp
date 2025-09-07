import Note from '../models/Note.js'


export const getNotes = async(_,res)=>{
console.log("its working")
try{
const data = await Note.find({}).sort({createdAt:-1});
if(!data){
    console.log("Unable to fetch data")
}
res.status(200).json(data);
}catch(err){
    console.log(err);
    res.status(500).json({success: 500, message: err.message})
}   
}
export const postNotes = async( req, res)=>{
    try{
        const data = new Note({
            title:req.body.title,
            content:req.body.content
        })
        const dataSaved = await data.save();
        res.status(201).json(dataSaved);

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
export const findById = async(req, res) =>{
    try{
        const noteId = req.params.id;
       const note = await Note.findById(noteId);
        if(!note){
            return res.status(404).json(  {
            success:false,
            message:"Not found"})
    }
    
        res.status(201).json({success:true, message:note})
        }
    catch(err){
        res.status(500).json(  {
            success:false,
            message:err.message})
    }
}
export const putNote = async(req,res) =>{
    try{
        const noteId =  req.params.id;    
        const data ={
            title: req.body.title,
            content: req.body.content
        }
    
        const updatedNote = await Note.findByIdAndUpdate(noteId, data, {new:true})
        res.status(200).json(updatedNote);
       if(!updatedNote){
         res.status(404).json(  {
            success:false,
        message:"Not found"})
       }

    }catch(err){
        res.status(500).json(  {
            success:false,
            message:err.message})
    }
}
export const delNote = async(req,res)=>{
    try{
        const noteId = req.params.id;
        const note = await Note.findByIdAndDelete(noteId);
    if(!note){
            return res.status(404).json(  { success:false,  message:"Not found"})
         }
         res.status(200).json({success:true, message:`${req.params.id} is deleted`});
    }catch(err){
        res.status(500).json(  {
            success:false,
            message:err.message})
    }
}
