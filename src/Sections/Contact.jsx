import React, { useRef, useState } from 'react'
import bgcontact from '../public/assets/terminal.png'
import arrup from '../public/assets/arrow-up.png'
const Contact = () => {
  const formRef = useRef()
  const [loading,setLoading] = useState(false);
  const [form, setForm] = useState(
    {
      name:'',
      email:'',
      message: ''
    }
  )

  const handleChange =( ) => {
    setForm (

    )
  }
  const handleSubmit = () => {

  }
  return (
    <section className='c-space my-20'>
      
      <div className="relative min-h-screen flex items-center flex-col justify-center ">
        <img src={bgcontact} alt="" className='absolute inset-0 min-h-screen ' />
        <div className="contact-container">
          <h3 className='head-text'>
            Let's talk
          </h3>
          <p className='text-lg text-white-600 mt-3'>
          Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'> 
            <label className='space-y-3 '>
                <span  className='field-label'>Name</span>
                <input type="text" className='field-input' required placeholder='Dinh Chien' value= {form.name} onChange={handleChange} />
            </label>
            <label className='space-y-3 '>
                <span  className='field-label'>Email</span>
                <input type="text" className='field-input' required placeholder='Dinhhoangchien15042003@gmail.com'onChange={handleChange} value ={form.email}/>
            </label>
            <label className='space-y-3 '>
                <span  className='field-label'>Your Message </span>
                <input type="text" className='field-input' required placeholder='Your Messageeee'onChange={handleChange} value= {form.message} />
            </label>
            <button className='field-btn'>
                Send message <img src={arrup} alt="" className='field-btn_arrow' />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
