import React from 'react'
// import instalogo from '.images/instalogo.png'
// import twitterlogo from '.images/twitterlogo.png'
export const ProfilePhoto = (props) => {
  return (
    <div>
        <img className='profile1' alt='profilephoto' src={props.src}/>
        {/* <img className='logo1' alt='logo1'src={ require('./images/instalogo.png').default}/> */}
        {/* <hr/> */}
        <br/>
        <div className='logo-container'>
          <a href='https://www.instagram.com/joyalcorda' target='_blank'>
        <img className='instalogo ' alt='' src={props.instaLogo}  />
        </a>
        </div>
        <div>
          <a href='https://twitter.com/j3yal' target='_blank'>
        <img className='twitterlogo ' alt='' src={props.twitterLogo}/>
        </a>
        </div>
    </div>
  )
}
