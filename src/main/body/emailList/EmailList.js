import { Checkbox, IconButton } from '@mui/material';
import React, { useState } from 'react'
import './EmailList.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailRow from './EmailRow';
import { useForm } from "react-hook-form";
import Mail from '../mail/Mail';
import { Link } from 'react-router-dom';

function EmailList( mails) {
 

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton><ArrowDropDownIcon/></IconButton>
          <IconButton><RedoIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton><ChevronLeftIcon/></IconButton>
          <IconButton><ChevronRightIcon/></IconButton>
          <IconButton><KeyboardHideIcon/></IconButton>
          <IconButton><SettingsIcon/></IconButton>
        </div>
      </div>
      <div className="emailList__list">
        {
        (mails.data) && mails.data.map(({mail}) =>(
            <EmailRow >
           key= {mail.user}
            {mail.user} 
            {mail.email}
            {mail.subject}
            {mail.message}
            </EmailRow>
        ))}
        <EmailRow 
        title='Twitch' 
        subject='Hey fello' 
        description='This is a test' 
        time='10pm'>
        </EmailRow>
         <EmailRow 
        title='Twitch' 
        subject='Hey fello' 
        description='This is a test' 
        time='10pm' />
      </div>
    </div>
  )
}

export default EmailList