import React, { useState } from "react";

const App = () => {
    const [fullname, setnew]=useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });
    const inputEv = (event) => {
        const{name,value}=event.target;
        setnew((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        })
    };
    const onSubmits= (event) =>{
        event.preventDefault();
        alert('form submitted');
    };
    return (
        <>
            <div>
            <form onSubmit={onSubmits}>
            <h1>Hello {fullname.fname} {fullname.lname}</h1>
            <p>{fullname.email} {fullname.phone}</p>
            <input type="text" placeholder="Enter your first Name" onChange={inputEv} name="fname" value={fullname.fname}></input>
            <br />
            <input type="text" placeholder="Enter your last Name" onChange={inputEv} name="lname" value={fullname.lname}></input>
            <br/>
            <input type="email" placeholder="Enter your email id" onChange={inputEv} name="email" value={fullname.email}></input>
            <br/>
            <input type="number" placeholder="Enter your phone num" onChange={inputEv} name="phone" value={fullname.phone}></input>
            <br/>
                <button type="submit">Click Me 👍 </button>
            </form>
            </div>
        </>
    );
}
export default App;