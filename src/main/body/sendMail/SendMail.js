import React, { useEffect, useState } from 'react'
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
// import { useDispatch } from 'react-redux';
import Popup from "reactjs-popup";
import EmailList from '../emailList/EmailList';

const getDatafromLS = ()=>{
  const data= localStorage.getItem('mails');
  if(data){
    return JSON.parse(data);
  }else{
    return []
  }
}

function SendMail() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [close, setClose] = useState(true);

  const [mails, setMails]= useState(getDatafromLS());

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (formData) => {
    console.log(formData);
    let mail ={
      user,
      email,
      subject,
      message
    }
    setMails([...mails,mail]);
    setUser('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  useEffect(() => {
    localStorage.setItem('mails', JSON.stringify(mails));
  },[mails])

  if (close) {
  return (
     <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
      <CloseIcon className="sendMail__close" onClick={()=>setClose(!close)} />
      </div>

      <form onSubmit= {handleSubmit(onSubmit)}>
        <input name="user" value={user.user}  onChange={(e)=> setUser(e.target.value)} placeholder="To" type="email" {...register("to",{required:true})} />
        {errors.to && (<p className="sendMail__error">To is required!</p>)}

        <input name="email" value={user.email} onChange={(e)=> setEmail(e.target.value)} placeholder="CC" type="email" {...register("cc",{required:true})} />
        {/* {errors.cc && (<p className="sendMail__error"> is required!</p>)} */}

        <input name="subject" value={user.subject} onChange={(e)=> setSubject(e.target.value)} placeholder="Subject" type="text" {...register("subject",{required:true})} />
        {errors.subject && (<p className="sendMail__error">Subject is required!</p>)}

        <input name="message" value={user.message} onChange={(e)=> setMessage(e.target.value)} placeholder="Message" type="text" className="sendMail__message" {...register("message",{required:true})}  />
        {errors.message && (<p className="sendMail__error">Message is required!</p>)}
       
        <div className="sendMail__options">
          <Button type="submit" className="sendMail__send" onClick={()=>setClose(!close)}>Send</Button>
        </div>
      </form>
      <div>
        <EmailList mails={mails} />
      </div>
    </div>)
    }
  return <></>;
} 



export default SendMail;