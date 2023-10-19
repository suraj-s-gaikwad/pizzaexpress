import React from 'react'
import cp from './images/img5.jpg'

export default function Contact() {
  return (
    <div className="Contacts" style={{ backgroundImage: `url(${cp})` }}>
    <div class="formcarry-container">
      <form action="#" method="POST" class="formcarry-form">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="fullName" required />

        <label for="email">Your Email Address</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Your Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
   </div>
   
  )
}
