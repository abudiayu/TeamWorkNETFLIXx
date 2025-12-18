import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'
const Footer = () => {
  return (
    <div>
      <div className='footer-outer-container'>
        <div  className='footer_container'>
        <div className='footer_group'>
            <div className='footer_icons'>
             <a href=""><FacebookIcon/></a>
             <a href=""><InstagramIcon/></a>
             <a href=""><YouTubeIcon/></a>
            </div>
            <li><a href="">Audio Description</a></li>
            <li><a href="">Gift Cards</a></li>
         
        </div>

        <div className='footer_group'>
            
            <li><a href="">Help Center</a></li>
            <li><a href="">Jops</a></li>
            <li><a href="">Cookie Preferences</a></li>
          
        </div>
        <div className='footer_group'>     
            <li><a href="">Terms of Use</a></li>
            <li><a href="">Corporate information</a></li>
            <li><a href="">
Investor Relations</a></li>
        </div>
        <div className='footer_group'>
            <li><a href="">Media Center</a></li>
            <li><a href="">Privacy</a></li>
       <li><a href="">Legal Notice</a></li>
        </div>
      </div>
      <div className='footer_group  footer_contact'>
         <li>  <a href="">Contact Us</a></li>            
         <li> <a href="">© 1997-2024 Netflix inc</a> </li>  
         <li><a href="">+2519...........</a></li>        
      </div>
      </div>
    </div>
  )
}

export default Footer
