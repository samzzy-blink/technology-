import React from 'react'
import '../Style/home.css'

const demo = () => {
  return (
    <>
    <section>
    <div className='titlec' id="contact">
    <h2>Our Contact</h2>
    <div class="underline">
    <div className='box'></div>
    </div>
</div>
    <div id='showcase'>
 
    <div className='container' id='content-demo'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur doloremque quo aliquid, totam aliquam sed ipsum officiis voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing.
    </div>

    <div id='demo-form'>
        <form action="">
            <div className='demo-first-form'>
                <div className='demo-second'>
                <label>FirstName</label>
                <input type="text" placeholder='firstname' />
                </div>
              
                <div className='demo-second'>
                <label>LastName</label>
                <input type="text" placeholder='lastname' />
                </div>
            </div>

            <div className='demo-first-form'>
                <div className='demo-second'>
                <label>Email</label>
                <input type="email" placeholder='email' />
                </div>
              
                <div className='demo-second'>
                <label>Phone </label>
                <input type="phone" placeholder='phone number' />
                </div>
            </div>

            <div className='demo-first-form'>
                <div className='demo-second'>
                <label>Your Company</label>
                <input type="text" placeholder='Company Name' />
                </div>
              
                <div className='demo-second'>
                <label>Service Required</label>
                <select name="services">
                <option value="none">-None-</option>
                    <option value="web-design">Web Design</option>
                    <option value="data-analysis">Data Analysis</option>
                    <option value="company-registration">Company Registration</option>
                    <option value="business-proposal">Business Proposal</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="app-development">App Development</option>
                </select>
                </div>
            </div>

            <div>
                <div className='demo-text-area'>
                <label>Message</label>
                <textarea className='demo-textarea-input' name="" id="" cols="30" rows="10"></textarea>
                </div>
              
            </div>

                <div>
                  <input type="checkbox" />
                </div>
           
            <input type="submit" value={'send message'} />
        </form>
    </div>
    </div>
  
    </section>
   
    </>
  )
}

export default demo