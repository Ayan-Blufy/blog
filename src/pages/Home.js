import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  getDocs,
  deleteDoc

} from "@firebase/firestore";
import { db, auth } from '../firbase'
const Home = ({isauth,setisauth}) => {
  const history = useNavigate();
  const userdb = collection(db, "user");
  const [postdata,setpostdata]=useState([]);

const solve=async ()=>{
  const data=await getDocs(userdb);
  setpostdata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
}

  useEffect(() => {
    const k = localStorage.getItem('isauth');
    // setisauth(k);
    if (!isauth &&!k) {
      history("/login");
    }
    else{
      solve();
    }
    

  }, [])


  const deletePost=async(id)=>{
    const user=doc(db,"user",id);
    await deleteDoc(user);
  }
  return (
    <div className="homePage">
      {postdata.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isauth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  )
}

export default Home