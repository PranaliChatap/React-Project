import React, { useState } from 'react'
import './style.css'


const Contact = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 
  const handleNameChange = (e) => {
    setName(e.target.value);
 }


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
 }
 const handleMessageChange = (e) => {
  setMessage(e.target.value);
}


const storeData = async(e) => {
  e.preventDefault();

  const result = await fetch('https://react-form-33298-default-rtdb.firebaseio.com/user.json',{
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      Name: name,
      Email: email,
      Message: message
    })
  })

  if(result){
    setName("");
    setEmail("");
    setMessage("");
    alert("Form Submmitted")
  }

}



  return (
   
    <div className="container mt-5 contact">
      
      <h2 className="mb-3 contact_head">Get in touch</h2><br />
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTTYEDAf5ev9UWx-vYy5wHhsMABLRPG8De_Y-M4wLCPIr66A9s4lbU5J_adcVnZPbOnw&usqp=CAU' className='img_6' alt='' /> 
      <div className='form'>
      <form method='POST' className='form_container'>
        <div className="mb-3">
        <label><span>Name </span><br/>
                <input type='text' value={name} onChange={handleNameChange}required/>
            </label>
        </div>
        <div className="mb-3">
        <label>  Email <br/>
                <input type='email' value={email} onChange={handleEmailChange} required/>
            </label><br/>
        </div>
        <div className="mb-3">
          <label className="mb-3" >
            Message<br/>
            <input type='text' row='3' value={message} onChange={handleMessageChange} required />
          </label>
        </div>
        <button onClick={storeData} className="btn btn-info hire-button">
         Submit
        </button>
      </form>
      </div>
      </div>
 
  
  )
}
export default Contact
