import React , {useRef , useState , useEffect} from  'react';
import { ChatEngine} from 'react-chat-engine';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import axios from 'axios';
import {useAuth}from '../contexts/AuthContext';
const Chats = ()=>{
    const history = useHistory();
    const{user} = useAuth();
    const [loading , setLoading] = useState(false);
    console.log(user.email, user.displayName,  user.uid);
    console.log(user);
    const handleLogout = async() =>{
    await auth.signOut();
    history.push('/');
    }
    const getFile = async(url)=>{
       const response = await fetch(url);
       const data = await response.blob();
return new File([data] , "userPhoto.jpg" , {type:'image/jpeg'})
   }



    useEffect(() =>{
        console.log(user);
        if(!user){
            history.push('/');
            return;
        }
        
        let formdata = new FormData();
        formdata = new FormData();
        formdata.append('email' , user.email);
        formdata.append('username' , user.email);
        formdata.append('secret' , user.uid);
        getFile(user.photoURL)
        .then((avatar) => {
            formdata.append('avatar', avatar , avatar.name);
        
        axios.post('http://api.chatengine.io/users/',
        formdata,
        {
headers:{"Private-key": "9cd9507a-b61e-49a6-b0e7-950a0cd0ee73"}
})
       
    .then(()=>setLoading(false))
    .catch((error)=>console.log(error))    
        
        })
    

        

        axios.get('https://api.chatengine.io/users/me/' , {
            headers:
            {
                "project-id" :"0c38bcf3-9c39-4ed1-b4ee-7846a8d0a197",
                 "user-name" : user.email,
                 "user-secret" : user.uid,
            }
        })
        .then(()=>{
            setLoading(false);
        })

        // .catch(()=>{
            // let formdata = new FormData();
//             formdata.append('email' , user.email);
//             formdata.append('username' , user.email);
//             formdata.append('secret' , user.uid);
//             getFile(user.photoURL)
//             .then((avatar) => {
//                 formdata.append('avatar', avatar , avatar.name);
            
//             axios.post('http://api.chatengine.io/users/',
//             formdata,
//             {
//    headers:{"Private-key": "2b9f461b-2fbd-4cd3-8537-9becc4ebaf6b"}
//    })
           
//         .then(()=>setLoading(false))
//         .catch((error)=>console.log(error))    
            
//             })
//         })
//     } 
  }  ,[user , history]);
        
    if(!user||loading)return 'Loading...';
return (
<div className = "chats-page">

    <div className = "nav-bar">
        <div className="logo-tab">
            Unichat
        </div>

        <div onClick = {handleLogout} className = "logout-tab">
            Logout
        </div>


    </div>
    <ChatEngine
    height = "calc(100vh-66px)"
    projectID = "0c38bcf3-9c39-4ed1-b4ee-7846a8d0a197"
    userName = "user.email"
    userSecret = "user.uid"
    />
    </div>
    );

}





export default Chats ;