import '../style/app.scss';
import data from '../data.json';
import { useState, useRef } from 'react';
import gsap from 'gsap';

function App2(){
//to track which item is open or not
    const [openAcc, setOpenAcc] = useState(null);
    const handleOpenAcc = (index) =>{
        if(index === openAcc){
            gsap.to(
                accordionRefs.current[index].querySelector('.accordion__details'),
                {
                    height: 0,
                    duration: 1,
                    ease: 'power4.inOut',
                    onComplete: () => setOpenAcc(null)
                }
            )
        }else{
//close the previous accordion
            if(openAcc !== null){
                gsap.to(
                    accordionRefs.current[openAcc].querySelector('.accordion__details'),
                    {
                        height: 0,
                        duration: 1,
                        ease: 'power4.inOut'
                    }
                )
            }
            setOpenAcc(index)
            gsap.fromTo(
                accordionRefs.current[index].querySelector('.accordion__details'),
                {height: 0},
                {
                    height: 'auto',
                    duration: 1,
                    ease: 'power4.inOut'
                }
            )
        }
    }
//make references to all items to apply animated
const accordionRefs = useRef([]);


    return(
        <section className="App">
        <section className="accordion__container">
{/* to apply the style and hide/show based on open accordion value */}
        <section className={`accordion__item ${openAcc === 0 ? 'open' : ''}`} 
        onClick={() => handleOpenAcc(0)}
        ref={(e) => accordionRefs.current[0] = e}>
            <section className="accordion__header">
                <p className="accordion__number">01</p>
                <p className="accordion__name">{data[0].header}</p>
            </section>
            <section className="accordion__details">
                <ul>
                    <li>{data[0].details[0]}</li>
                    <li>{data[0].details[1]}</li>
                    <li>{data[0].details[2]}</li>
                </ul>
            </section>
        </section>

        <section className={`accordion__item ${openAcc === 1 ? 'open' : ''}`}
         onClick={() => handleOpenAcc(1)}
         ref={(e) => accordionRefs.current[1] = e}>
            <section className="accordion__header">
                <p className="accordion__number">02</p>
                <p className="accordion__name">{data[1].header}</p>
            </section>
            <section className="accordion__details">
                <ul>
                    <li>{data[1].details[0]}</li>
                    <li>{data[1].details[1]}</li>
                    <li>{data[1].details[2]}</li>
                </ul>
            </section>
        </section>

        <section className={`accordion__item ${openAcc === 2 ? 'open' : ''}`}
         onClick={() => handleOpenAcc(2)}
          ref={(e) => accordionRefs.current[2] = e}>
            <section className="accordion__header">
                <p className="accordion__number">03</p>
                <p className="accordion__name">{data[2].header}</p>
            </section>
            <section className="accordion__details">
                <ul>
                    <li>{data[2].details[0]}</li>
                    <li>{data[2].details[1]}</li>
                    <li>{data[2].details[2]}</li>
                </ul>
            </section>
        </section>

        </section>
        </section>
    )
}

export default App2;