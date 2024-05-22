import './Formstyles.css'
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form action='https://api.web3forms.com/submit' method='POST'>
            <input type="hidden" name="access_key" value="9b270829-1708-46cd-ab1e-66178fd45ea7" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <label>Your Name</label>
            <input type='text' name='name' required />

            <label>Email</label>
            <input type='email' name='email' required />

            <label>Message</label>
            <textarea name='message' rows="6" placeholder='Type Your message here' required></textarea>

            <button className='btn' type='submit'>
                 Submit
            </button>
        </form>
    </div>
  )
}

export default Form
