import React from 'react'
import './Links.css'

const Links = () => {
  const links = [
    {
      id: "twitter",
      name: "Twitter Link",
      link: "https://twitter.com/bhinary_jay",
      title: ""
    },
    {
      id: "btn__zuri",
      name: "Zuri Team",
      link: "https://training.zuri.team/",
      title: ""
    },
    {
      id: "books",
      name: "Zuri Books",
      link: "https://books.zuri.team/",
      title: "Books by Zuri"
    },
    {
      id: "book__python",
      name: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=Bsonat",
      title: "Learn about python "
    },
    {
      id: "pitch",
      name: "Background Check for Coders",
      link: "https://backgroundcheck.zuri.team/",
      title: "zuri check"
    },
    {
      id: "book__design",
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      title: "contact me "
    },
    {
      id: "contact",
      name: "Contact",
      link: "./contact",
      title: "Bsonat Design book "
    },
  ];
  return (
    <div className='mx-auto flex-col items-center justify-center'>
      <div className='w-mx-auto items-center '>
        
        <div className='items-center w-full gap-8 mx-auto'>
        {links.map((link) => (
          <a className='linkButton'
            // key={link.id}
            href={link.link}
            id={link.id}
            title={link.title}
           >{link.name}
          </a>
        ))
        }
        </div>
        
      </div>
       
    </div>
  )
}

export default Links
