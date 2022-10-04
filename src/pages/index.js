import React from 'react'
import '../Style/home.css'





const Home = () => {
  return (
  <>

<div class="home-section">
  <div class="home" id="home">
    <div class="opacity"></div>
    <h4 class="title-n">Modern & custom web application  development to help your organization grow.</h4>
    <p className='head-4'>We Are An Unified Software Development Firm,
      We design and build unique web apps tailored to your specific business needs.</p>
    <a className='get' href="/signin">Request For Demo</a>
</div>
</div>


{/* modify section */}
<div>
<div className='title' id="contact">
  <h2 style={{fontSize:'30px'}}>Modify Your Business In Few Steps</h2>
    <div class="underline">
    <div className='box'></div>
    </div>
    </div>


    <div className='modify'>
      
      <div className='modify-card'>
      <img src="/icons/clock.png" alt="" />
        <div className='card-text'>Request A Demo</div>
        <div className='card-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe consectetur facilis provident quam nesciunt nemo vero repudiandae repellat ducimus</div>
      </div>

      <div className='modify-card'>
        <img src="/icons/monitor.png" alt="" width={'100px'} height={'100px'} />
        <div className='card-text'>See It At Work</div>
        <div className='card-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus perspiciatis numquam, accusantium id, animi voluptatibus dolorum eos vel suscipit</div>
      </div>

      <div className='modify-card'>
        <img src="/icons/paper.png" alt="" />
        <div className='card-text'>Start Your Pilot</div>
        <div className='card-texts'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam repellendus impedit nisi est harum consectetur aspernatur perspiciatis quo
        </div>
      </div>

 
       <div className='modify-card'>
         <img src="/icons/lipids.png" alt="" />
       <div className='card-text'>Scale Your Success</div>
        <div className='card-texts'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam repellendus impedit nisi est harum consectetur aspernatur perspiciatis quo
        </div>

        
        </div>
      </div>
</div>

{/* Services session */}

<div class="title" id="services">
  <h2>Our Services</h2>
  <div className="underline">
    <div className='box'></div>
  </div>
</div>

<div class="first-flex">                  
<div class="card">
  <div class="opacity-card"></div>
  
  <h3>Web Design</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quod neque! Quaerat!</p>
</div>
<div class="card">
  <div class="opacity-card"></div>
   
  <h3>Business Proposal</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quod neque! Quaerat!</p>
</div>
<div class="card">
  <div class="opacity-card"></div>
  
  <h3>Company Registration</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quod neque! Quaerat!</p>
</div>
</div>

<div className='services-btn-container'>
<a href="/Services" className='services-btn'> More Services
<img className='arrow' src="/icons/arrow.png" width={'25px'} height={'20px'} alt="" /></a>
</div>


{/* About Home section */}
<section className='about-home-section'>
<div class="title" id="services">
  <h2>About Us</h2>
  <div className="underline">
    <div className='box'></div>
  </div>
</div>
<div className='about-flex'>
  <div className='img-about'>
    <img src="/images/pexels-toni-cuenca-585752.jpg" alt=""  height={'520px'} width={'400px'} />
  </div>
  <div className='text-about'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim aliquid, quasi laboriosam, pariatur quos maiores deleniti deserunt atque odit quaerat ab distinctio, quia ipsam mollitia numquam tempora fugiat impedit voluptate. Ducimus nostrum, iusto nihil totam praesentium placeat laudantium. Doloremque suscipit tenetur alias quis maxime ad saepe quibusdam praesentium vel in eius odio voluptate eum ea itaque dicta numquam totam nihil necessitatibus fugit nam, dolor placeat consequatur. Sit et eligendi, vitae harum minus aspernatur inventore dolorum illo fugiat! Id quia accusamus enim, explicabo eaque incidunt delectus saepe? Sequi, fugiat! Excepturi animi eius ratione expedita vel nobis, ipsam veritatis alias nisi repudiandae. Voluptatibus minima eos soluta veritatis minus quo sapiente error nostrum facere aliquid asperiores cum aperiam mollitia libero, maiores, earum quam officiis fugiat repudiandae laudantium atque recusandae. Quod accusamus labore recusandae ab laboriosam sequi veniam voluptate quis odit. Deleniti ullam corrupti ipsam, beatae quas nostrum, maiores quae nemo, provident ad voluptate fugit quo? Est tempora sunt quam, impedit voluptatibus expedita soluta architecto blanditiis animi atque alias! Eveniet quo sint dolor aspernatur nostrum suscipit est sit aliquam, nemo dignissimos fugit sequi, at in voluptas eos perferendis iusto provident error recusandae deserunt. 
  </div>
</div>
</section>



{/* Footer Section */}
<section className='footers-homes'>
  <div className='footer-home'>
<div className='footer-logo'>
<h4>Logo</h4>
</div>

<div className='what-we-do-group'>
<div className='foot-1'>
    <h4 className='ft-title-header'>What We Do</h4>
    <h4>Web Design</h4>
    <h4>Web App Development</h4>
    <h4>Mobile App Development</h4>
    <h4>Managed Hosting</h4>
    <h4>Graphic Design</h4>
</div>

<div className='foot-2'>
<h4 className='ft-title-header'>Modify Your Business</h4>
<h4>Request A Demo</h4>
<h4>See It At Work</h4>
<h4>Start Your Pilot</h4>
<h4>Scale Your Success</h4>
</div>

</div>

<div className='foot-contact'>
<h4 className='ft-title-header'>Contact Us</h4>
<h4>samcul20@gmail.com</h4>
<h4>No.39, Adebayo, Ado-Ekiti, Ekiti State</h4>
</div>


</div>

<div className='copy-right'>
<p>&copy; 2022 Samzzy Blink || theCoder </p>
</div>
</section>
</>



  )
}

export default Home