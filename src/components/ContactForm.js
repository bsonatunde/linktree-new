import React, { useState, useEffect } from 'react'


const ContactForm = () => {
     const name = "bsonat"
     const formValidation = {firstName:"", lastName:"", email:"", message:"" };
     const [formValues, setformValues]= useState(formValidation);
     const [formErrors, setformErrors]= useState({});
     const [isSubmit, setisSubmit] = useState(false);

        const handleChange =(e) =>{
                  // console.log(e.target);
                  const {name, value} = e.target;
                  setformValues({...formValues, [name]:value});
                  console.log(formValues)
        };
            
        const handleSubmit =(e) => {
               e.preventDefault();
               setformErrors(validate(formValues));
               setisSubmit(true);
               setformValues(formValidation)
        };

        useEffect(() => {
          console.log(formErrors)
          if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
          }
        },[formErrors])
         const validate =(values) => {
          const errors ={}
          
          if(!values.firstName) {
            errors.firstName = "first Name is required"
          }
          if(!values.lastName) {
            errors.lastName = "last Name is required"
          }
          if(!values.email) {
            errors.email = "email is required!"
          } 
          if(!values.message) {
            errors.message = "message is required !"
          }
            return errors;    

         };
    
     return (
    <div className='items-center mx-auto '>
     
        <form className='sm:p-10 my-10 w-[90%] sm:w-[60%] mx-auto ' onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className='ui message sucess text-[blue] font-semibold text-center'> Message Sent Thank You</div>): ''}
          <div  className='m-2'>
        <h1 className='text-3xl font-bold'>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
          <div className='sm:flex '>
  <div className='flex-col flex m-2'>
    <label >First Name</label>
    <input type="text" id='first_name' className='border sm:w-[348px] h-[44px] rounded-lg p-2' placeholder='Enter your first name'name='firstName' value={formValues.firstName} onChange={handleChange}/>
    <p className='text-red-600'>{formErrors.firstName}</p>
  </div>
  <div className='flex-col flex m-2'>
    <label >Last Name</label>
    <input type="text" id='last_name' className='border sm:w-[348px] h-[44px] rounded-lg p-2' placeholder='Enter your last name' name='lastName' value={formValues.lastName} onChange={handleChange}/>
    <p className='text-red-600'>{formErrors.lastName}</p>
    </div>
  </div>
  <div className='flex-col flex m-2' >
    <label >Email</label>
    <input type="email" id="email" className='border sm:w-[720px] h-[44px] rounded-lg p-2' placeholder='yourname@gmail.com' name='email'  value={formValues.email} onChange={handleChange}/>
    <p className='text-red-600'>{formErrors.email}</p>
  </div>
  <div className='flex-col flex m-2' >
    <label >Message</label>
    <textarea id="message" className='border sm:w-[720px] h-[132px] rounded-lg p-2' placeholder='Send me a message and I ll reply you as soon as possible...' name='message' value={formValues.message} onChange={handleChange} />
    <p className='text-red-600'>{formErrors.message}</p>
  </div >
  <div className='m-2'>
  <p className='text-gray-600 my-4'><input type="checkbox" className='mr-5'/> 
    You agree to providing your data to {name} who may contact you.</p>
    </div>
  
  {/* <button id="btn__submit" type="submit" className='bg-[#1570EF] sm:w-[720px] h-[48px] w-full rounded-lg text-white hover:bg-[#175CD3]'>Send Message</button> */}
  
<button id="btn__submit" onClick={handleSubmit }  className='bg-[#1570EF] sm:w-[720px] h-[48px] w-full rounded-lg text-white hover:bg-[#175CD3]'>Send Message</button>
</form>
    </div>
  )
}

export default ContactForm