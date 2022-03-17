import React, { useState } from 'react'
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NoteIcon from '@mui/icons-material/Note';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
// import { useDispatch } from 'react-redux';
import SendMail from '../body/sendMail/SendMail';
 import Popup from "reactjs-popup";

function Sidebar() {


  return (
    <div className="sidebar">
        <Popup trigger={ <Button startIcon={<AddIcon fontSize='large' />}
         className="sidebar__compose" >
            Compose Mail
        </Button> }  >
        {close => (
          <div>
          <SendMail/>
          <a onClick={close} />
        </div>
        )}
        </Popup>
        <h3 style={{paddingBottom: '10px'}}>FOLDERS</h3>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
        <SidebarOption Icon={EmailIcon} title="Send Mail" number={54} />
        <SidebarOption Icon={CircleTwoToneIcon} title="Important" number={54} />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
        <SidebarOption Icon={DeleteOutlineTwoToneIcon} title="Trash" number={54} />
        <h3 style={{paddingBottom: '10px', paddingTop: '10px'}}>CATEGORIES</h3>
        <SidebarOption Icon={CircleTwoToneIcon } title="Work" number={54} />
        <SidebarOption Icon={CircleTwoToneIcon } title="Documents" number={54} />
        <SidebarOption Icon={CircleTwoToneIcon } title="Social" number={54} />
        <SidebarOption Icon={CircleTwoToneIcon } title="Advertising" number={54} />
        <SidebarOption Icon={CircleTwoToneIcon } title="Clients" number={54} />
    </div>
  )
}

export default Sidebar