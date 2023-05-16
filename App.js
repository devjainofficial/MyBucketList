import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Bucket from "./Bucket";
import {db} from "./firebase";
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from "firebase/firestore";




const style = {
  bg: `h-screen w-screen p-4 bg-grandient-to-r from-[#2FBBE0] to-[#1CB5E0]`,
  container:`bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-grey-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`
}

function App() {
const [buckets, setBuckets ] = useState([]);
const [input, setInput] = useState('');


//Create Bucket
const createBucket = async (e) => {
  e.preventDefault(e)
  if(input === ''){
    alert('Please Enter a Valid Water')
    return
  }
  await addDoc(collection(db, 'buckets'), {
    text: input,
    completed:false
  })  
  setInput('')
};

//Read Bucket from Firebase
useEffect(()=>{
  const q = query(collection(db,'buckets'))
  const unsubscribe = onSnapshot(q, (querySnapshot)=>{
    let bucketsArr = []
    querySnapshot.forEach((doc) => {
      bucketsArr.push({...doc.data(), id: doc.id})
    });
    setBuckets(bucketsArr)
  })
  return () => unsubscribe()
},[])


//Update Bucket in Firebase
const toggleComplete = async (bucket) => {
await updateDoc(doc(db, 'buckets', bucket.id),{
  completed: !bucket.Completed
})
}


//Delete Bucket
const deleteBucket =async (id) => {
  await deleteDoc(doc(db, 'buckets', id))
}


  return (
  <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>BUCKET LIST</h3>
        <form onSubmit={createBucket} className={style.form}>
          <input value={input}
          onChange={(e)=> setInput(e.target.value)} 
          className={style.input} 
          type="text" 
          placeholder="Add Your buckets" 
          />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {buckets.map((bucket, index)=>(
            <Bucket key={index} bucket={bucket} toggleComplete={toggleComplete} deleteBucket = {deleteBucket}/>
          ))
          }
        </ul>

        {buckets.length < 1 ? null : <p className={style.count}>{`You have ${buckets.length} buckets`}</p>
}
      </div>
   </div>
  );
}

export default App;
