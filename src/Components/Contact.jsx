import React, { useEffect, useState } from 'react'

function Contact() {
  const [data,setData]=useState({
    fullName:'',
    phone:'',
    email:'',
    password:''
  });

  const InputEvent = (event)=>{
      const{name,value}=event.target;
      setData((preVal)=>{
        return{
          ...preVal,
          [name]:value,
        }
      })
  }
  const formSubnit=(e)=>{
    e.preventDefault();
    alert(
      `my Name is ${data.fullName}. My phone number is ${data.phone}`
    );
    setData({
      fullName:'',
      phone:'',
      email:'',
      password:''
    })
  };
 
  return (
    <>
    <div className='my-5'>
      <h1 className='text-center'>Contact Me</h1>
    </div>
    <div className='container contact_div'>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
            <form action="" onSubmit={formSubnit}>
            <div class="form-group row">
                <label for="text" class="col-sm-2 col-form-label">Full name</label>
                <div class="col-sm-10">
                  <input 
                  type="text" 
                  required
                  readonly class="form-control" 
                  id="staticEmail" 
                  name='fullName' 
                  value={data.fullName} 
                  onChange={InputEvent} 
                  placeholder="Enter your full name"/>
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Phone no.</label>
                <div class="col-sm-10">
                  <input 
                  type="tel" 
                  required
                  readonly class="form-control" 
                  id="staticEmail" 
                  name='phone' 
                  value={data.phone} 
                  onChange={InputEvent} 
                  placeholder="9876543210"/>
                </div>
              </div>
              <br />
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input 
                  type="text" 
                  required
                  readonly class="form-control" 
                  id="staticEmail" 
                  name='email' 
                  value={data.email} 
                  onChange={InputEvent} 
                  placeholder="email@example.com"/>
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password"
                  required 
                  class="form-control" 
                  id="inputPassword" 
                  name='password' 
                  value={data.password} 
                  onChange={InputEvent}
                   placeholder="Password"/>
                </div>
                
              </div> 
              <br />
              <center>
                <button type="submit" class="btn btn-outline-primary" onSubmit={" "}>Submit</button>
              </center>
            </form>
        </div>
      </div>

    </div>
    </>
  )
}

export default Contact
