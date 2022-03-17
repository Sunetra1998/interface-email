import { Checkbox, IconButton } from '@mui/material';
import React, { useState } from 'react'
import './EmailRow.css';
import { useNavigate } from 'react-router-dom';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
// import { useDispatch } from 'react-redux';

function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate();
    // const [mail,setMail] = useState();
    // const dispatch = useDispatch();

    const openMail = () =>{
        navigate("/mail");
    };
 
  return (
    <div 
    onClick={openMail} 
    className="emailRow">
        <div className="emailRow__options">
            <Checkbox />
            <IconButton><StarBorderOutlinedIcon /></IconButton>
            <IconButton><LabelImportantOutlinedIcon /></IconButton>
        </div>
        <div className="emailRow__title">
            {title}
        </div>
        <div className="emailRow__message">
            <h4>{subject}
                <span className="emailRow__description">-
                    {description}
                </span>
            </h4>
        </div>

        <p className="emailRow__time">
            {time}
        </p>
    </div>
  )
}

export default EmailRow