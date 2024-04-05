import React from 'react'
import "./description.css";
import flash from '../../assets/images/flash.png'
import magnifier from '../../assets/images/magnifier.png'

const Description = () => {
  return (
    <>
        <section className='description'>
            <section className='desc desc1'>
                <img src={flash}/>
                <p>Get lightning fast results and use it in your 
accounts.</p>
            </section>
            <section className='desc desc2'>
                <img src={magnifier}/>
                <p>Try to make your description accurate for
best results.</p>
            </section>
        </section>
    </>
  )
}

export default Description