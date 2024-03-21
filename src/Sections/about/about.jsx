import React from 'react'
import './about.css'
import Downloadbutton from '../../Components/buttons/downloadbutton'




export default function About() {
  return (
    <div className='main-wrapper' id='about'>
        <div className="line"> </div>
        
        <div className="sub-container">
            <div className='about-wrapper'>
                <div className="about-upper">
                    <h1 className='section-header-text'>
                        About
                    </h1>
                    <div className="text-image-wrapper">
                        <div className="first-text-section">
                            <div className="header-texts">
                                <h3> Hello, I'm </h3>
                                <h1> Wisdom Iwunwa .</h1>
                                <h2> And I am a <span className='frontend-dev'> FRONTEND DEVELOPER </span> </h2>
                            </div>

                            <p className='section-content'>
                                Wisdom Iwunwa is a proficient web developer(and more 😉) that designs,
                                and is most concerned with and about meeting needs of clients, 
                                organizations, and whoever requires his services by providing lasting
                                and industry’s standard solutions to tech problems - yes, tech because he
                                wears other hats that enable his proficiency in the industry.
                            </p>
                            <Downloadbutton/>
                        </div>
                    </div>
                </div>
                <img 
                    src={process.env.PUBLIC_URL + '/wizImg blackbg.png'}
                    alt="wiz-img"
                    width={500}
                    height={550} 
                    className='about-image'
                />
            </div>

            <p className='section-content section-subtext '>
                My Journey into tech was as a result of curiosity. Endless waves of questions always popped(still pops) 
                into my mind, questions that led to more confusion as to how these tech things are done. Personally, 
                I believe proficiency is birthed from and in the place of deep confusion on and about a matter because 
                when clarity finally comes; all the roads not to take are already known. And the beautiful thing about 
                all these is that even things that were not set out to be learnt become discovered - this is basically 
                my tech story. I ventured into web development as a teenager, and after a one week period I dumped it, 
                maybe because I was trying to memorize all the HTML tags I came across; sad. Time went on and I realized 
                that I had thrown a gem away and that’s when I picked it back up,  but this time, as a ui/ux designer and 
                decided that it will be one of the tools I will use to  dig the earth in search of wealth along-side making 
                global impact, touching lives and providing solutions. 
                <br />
                <br />
                Wow! You already know me. One more thing; I’m really good at this thing I do. Kindly check out my works 
                and do not hesitate to hire me. 
                <br />
                <br />
                Cheers! 
            </p>
        </div>
        
    </div>
    
  )
}
