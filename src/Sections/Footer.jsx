import React from 'react'
import git from '../public/assets/github.svg'
import ig from "../public/assets/instagram.svg"
const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mx-3'>
      <div className="text-white flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
      <div className="social-icon">
          <a className='flex justify-center ite' href='https://github.com/dinhchien1504'>
          <img src={git} alt=" " className='w-1/2 h-1/2'/>
          </a>
        </div>

        <div className="social-icon">
          <a className='flex justify-center ite' href='https://www.instagram.com/aoshynnn_/'>
          <img src={ig} alt=" " className='w-1/2 h-1/2'/>
          </a>
        </div>

      </div>
      <p className='text-white-500'> DinhChien
      </p>
      
    </section>
  )
}

export default Footer
