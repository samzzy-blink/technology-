import React from 'react'
import '../Style/home.css'

const Contact = () => {
  return (
    
    <div>
         <div className='titlec' id="contact">
    <h2>Our Contact</h2>
    <div class="underline">
    <div className='box'></div>
    </div>
</div>
          <section className="line">
  <div class="opacity"></div>
   <div id="max-width">
    
    <h4 class="avail">We are available 24/7</h4>
    <h3 class="tel">WhatsApp Line: (+234) 815 893 4440</h3>
    <p class="connect">for projects and any issues or schedule of appointment. connect with us</p>
    <a class="discuss"  href='www.google.com'>let's Discuss</a>
  </div>
 </section>





<section class="contact">
    <div class="columns">
        <div class="column left">
            <div class="text-1">
             <p className='quick'>Quick Contact</p> 
                <p class="pss">You can get in touch through the following descriptions</p>
            </div>
            <div class="titles">
                <h5 class="title">Name:</h5>
                <p class="ps">SAMZZY BLINK</p>
            </div>
            <div class="titles">
                <h5 class="title">Adddress:</h5>
            <p class="ps">No 39, Opp Total Filling Station,<br/>
                Adebayo, Ado-Ekiti.
            </p>
          </div>

            <div class="titles">
                <h5 class="title">Website:</h5>
            <p class="ps"> www.samzzyblink.com</p>
           </div>

            <div class="titles">
                <h5 class="title">Tel no:</h5>
            <p class="ps">+2347025245208, +2348158934440</p>
        </div>

        </div>
        <div class="column right" id="message">
            <div class="text">Message Us</div>
            
                <form action="https://formspree.io/f/mjvjgyrw" method="POST">
                    <div class="fields">
                        <div class="field name">
                            <input type="text" id="name" name='' placeholder="Name" required/>
                        </div>
                        <div class="field email">
                            <input type="email" id="email" name="email" placeholder="Email" required/>
                        </div>
                    </div>
                        <div class="field">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required/>
                        </div>
                    
                        <div class="field textarea">
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Describe Your Interest.." required></textarea>
                        </div>
                        <div class="button">
                            <button type="submit">Send message</button>
                        </div>
                </form>
        </div>
    </div>
</section>




    <div class="last-bottom">
        <h1 class=" ft">Connect With The Best</h1>
        <p class="last-txt"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio delectus ut dolore. Quidem expedita maiores voluptatum dolorum iure sed provident, accusantium velit quod. Doloribus qui, voluptatibus laboriosam repellendus adipisci voluptate doloremque reprehenderit recusandae? Vel culpa animi iusto fuga quod?</p>
        <div class="last-flexs">
            <div>
                <p class="last-txt">No.20 Wellington Close, Ketu, Lagos</p>
                <p class="last-txt">07025245208, 08158934440</p>
            </div>
            <div>
                <p class="last-txt">samcul20@gmail.com</p>
            </div>
        </div>
       
    </div>
    <div class="footers">
    <p class="footer"> Created By <span>SamzzyBlink</span>|&copy;2021 All right reserved.</p>
</div>
    </div>
  )
}

export default Contact