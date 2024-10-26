import React, { useRef, useState } from 'react'
import bgcontact from '../public/assets/terminal.png'
import arrup from '../public/assets/arrow-up.png'
import emailjs from '@emailjs/browser'

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

  const handleChange =( {target: {name, value}}) => {
    setForm ({...form , [name]: value } )
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.send(
        "service_iz6ngyf",
        "template_pkj2oca",
        {
          from_name : form.name,
          to_name: 'Dinh chien',
          from_email: form.email,
          to_email: 'occho3434@gmail.com',
          message : form.message
        },
        'QWhsgD3GAXN2AL10w'
      )
      setLoading(false)
      alert ("Da gui mail :D ")
      setForm({
        name: ' ',
        email: '',
        message: ''
       })
    } catch (error) {
      console.log(error);
      setLoading(false)
      alert("Error ")
    }
    
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
                <input 
                type="text" 
                name='name'
                className='field-input' 
                required 
                placeholder='Dinh Chien' 
                value= {form.name} 
                onChange={handleChange}
                 />
            </label>

            <label className='space-y-3 '>
                <span  className='field-label'>Email</span>
                <input 
                type="email"
                name='email'
                className='field-input'
                required placeholder='Dinhhoangchien15042003@gmail.com'
                onChange={handleChange} 
                value ={form.email}/>
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>
            
            <button className="field-btn" type="submit" disabled={loading}>
                {console.log(loading)}
                {loading ? 'Sending...' : 'Send Message'}

                <img src={arrup} alt="" className='field-btn_arrow' />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
