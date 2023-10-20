import React from 'react'

function Contact() {
  return (
    <section className='CommonSection contactSection'>

<div className='ContactFormContainer'>
  <h2>Contact Me</h2>
  <form className='ContactForm'>
    <input type="text" placeholder='Enter Your Name' className='inputBox' />
    <input type="text" placeholder='Enter Subject' className='inputBox' />
    <input type="email" placeholder='Enter Your Email Address'  className='inputBox'/>
    <textarea className='MessageArea' placeholder='Enter Your Message'></textarea>
    <button className='submitBtn'>Submit</button>
  </form>


</div>
    </section>
  )
}

export default Contact
