import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ListCom=(props)=>{
    const[item,retitem]=useState(false);
    const dltitem=()=>{
        retitem(true);
    }
    return(
        <div className="todo_style">
            <span onClick={dltitem}><DeleteIcon className="deleteIcon"/></span>
            <li style={{textDecoration: item?"line-through":"none"}}>{props.text}</li>
        </div>
    );
}
export default ListCom;