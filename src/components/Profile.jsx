import React from 'react';
import Avatar from '../assets/me.jpg'
import avatarIcon from '../assets/Icon.png'
import shareWeb from '../assets/shareWeb.png'
import shareMobile from '../assets/shareMobile.png'
import tooltip from '../assets/Tooltip.png'
import './Profile.css'

function Profile() {
  // const [display, setDisplay] = useState('none')

  // const handleShareLink = () => {
  //   if ( display === 'none' ) {
  //     setDisplay( 'block' )
  //     } else {
  //       setDisplay( 'none' )
  //     }
  //   }

  return (
    
    <div className='w-full h-full items-center'>
      
      <div className='w-full sm:w-[80%] mx-auto items-center my-10'>
        {/* share link icon */}
        <div className='shareIconDiv group'>
          <img src={tooltip} alt='/' className='opacity-0 group-hover:opacity-100 relative top-5 left-3' />
          <img src={shareWeb} alt='/' className='hidden sm:flex' />
          <img src={shareMobile} alt='/' className='flex sm:hidden' />
          {/* <div className='w-[100px] bg-black text-white p-2 rounded-3xl absolute right-10' style={{display:display}}>Share Link</div> */}
          </div>

        {/* avatar section */}

        <div className='w-full flex-col items-center py-2'>
          <div className='avatar'>
            <div className='avatarDiv group'>
              <img src={Avatar} alt='/' id='profile__img' />
              {/* overlay */}
              <div className='opacity-0 group-hover:opacity-100 h-[100px] relative top-[-100px] rounded-full hover:bg-black/50'>
                  <img src={avatarIcon} alt='/' className= 'mx-auto relative top-16' />
              </div>
            </div>
            
            <h1 className='text-lg sm:text-xl text-center font-bold'>Onatunde Bolaji</h1>
            {/* <h1 id='slack' className='hidden text-center font-bold text-2xl sm:text-4xl'>Bsonat</h1> */}
          
          </div>
        </div>
                
      </div>
      
           
    </div>
  );
}

export default Profile;
