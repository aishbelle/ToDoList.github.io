import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from './ListCom'
const ToDoList = () => {
    const[Items,setItems]=useState('');
    const[Itemlist,setlist]=useState([]);
    const inputItems=(event)=>{
        setItems(event.target.value);
    }
    const Listitems=()=>{
        setlist((preVal)=>{
            return [...preVal,Items];
        })
        setItems("");
    };
    
    return(
        <>
            <div className='main_div'>
            <div className='center_div'>
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type='text' value={Items} placeholder='enter your items' onChange={inputItems}/>
            <Button className='newBtn' variant="contained" onClick={Listitems}><AddIcon/></Button>
            <br/>
            <ol>
                {Itemlist.map((val,index)=>{
                    return(
                        <ListCom key={index} text={val}/>
                    );
                })}
            </ol>
            <br/>
            </div>
            </div>
        </>
    );
}
export default ToDoList;