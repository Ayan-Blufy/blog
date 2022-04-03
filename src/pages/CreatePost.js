import { useState,useEffect } from "react";

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

const CreatePost = ({isauth}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const userdb = collection(db, "user");

  const history = useNavigate();
  useEffect(() => {
if(!isauth)
{
  history("/login");
}
  }, [])

  const solve = async () => {

    await addDoc(userdb, { title: title, postText: postText ,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}});
    setTitle("");
    setPostText("");

  }


  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            value={postText}
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={solve}> Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost
