import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import {facebookLink, instagramLink, twitterLink, youtubeLink, pinterestLink} from './globalValues';

const Footer = () => {
    
    return (
       
        <div className='w-full bg-[#5A2317]/95 py-8'>
          <div className='max-w-[80%] mx-auto flex flex-col px-4 text-white'>
            <div className='flex text-center justify-between items-center'>
              <h1>IRIS</h1>
              <div className='flex justify-between w-full max-w-[300px] my-4'>
                <a href={facebookLink} target="_blank" rel="noreferrer">
                <FaFacebook className='icon' />
                </a>
                <a href={twitterLink} target="_blank" rel="noreferrer">
                <FaTwitter className='icon' />
                </a>
                <a href={youtubeLink} target="_blank" rel="noreferrer">
                <FaYoutube className='icon' />
                </a>
                <a href={pinterestLink} target="_blank" rel="noreferrer">
                <FaPinterest className='icon' />
                </a>
                <a href={instagramLink} target="_blank" rel="noreferrer">
                <FaInstagram className='icon' />
                </a>
              </div>
          </div>
          <div className='flex justify-between'>
            <ul className='flex'>
              <li className='px-2'>About</li>
              <li className='px-2'>Partnerships</li>
              <li className='px-2'>Careers</li>
              <li className='px-2'>Newsroom</li>
              <li className='px-2'>Advertising</li>
            </ul>
            
          </div>
          </div>
        </div>

      );
}
 
export default Footer;