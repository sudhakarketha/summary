import React from 'react';
import { useState } from 'react';

import './main.css';


const Main = () => {

    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }


    return (
        <div className='main-container'>
            <div className='thumbnail-container'>
                <h2></h2>
                <div className='accordion'>
                    <h2 className='heading'>The Barebones Of An Accordion</h2>
                    <p className='sub-head'>Highlighting important details of a section and revealing more details upon a tap or click, if </p>
                    {data.map((item, i) => (
                        <div className='item'>
                            <div className='title' onClick={() => toggle(i)}>
                                <h2 >{item.question}</h2>

                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <hr />
                            <div style={{
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                display: '-webkit-box',
                            }}
                                className={selected === i ? 'content show' : 'content'}>
                                {item.answer}

                            </div>

                        </div>
                    ))}
                </div>
            </div>
            {/* <div className='details-container'></div> */}
        </div>
    )
}

const data = [
    {
        question: 'When and how it should be used ?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure nam officiis, laudantium voluptatum ut repudiandae at ipsam animi? Tempora deserunt consectetur natus delectus aliquam hic eaque rem quis aut? Quis repellat exercitationem esse voluptatem sapiente aspernatur, aliquam reprehenderit aperiam explicabo, minima culpa illum. Quod doloremque tempora iure veritatis assumenda?'

    },
    {
        question: 'What is an accordion ?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure nam officiis, laudantium voluptatum ut repudiandae at ipsam animi? Tempora deserunt consectetur natus delectus aliquam hic eaque rem quis aut? Quis repellat exercitationem esse voluptatem sapiente aspernatur, aliquam reprehenderit aperiam explicabo, minima culpa illum. Quod doloremque tempora iure veritatis assumenda?'
    },
    {
        question: 'What if the user clicks on a collapsed card while another card is   open ?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure nam officiis, laudantium voluptatum ut repudiandae at ipsam animi? Tempora deserunt consectetur natus delectus aliquam hic eaque rem quis aut? Quis repellat exercitationem esse voluptatem sapiente aspernatur, aliquam reprehenderit aperiam explicabo, minima culpa illum. Quod doloremque tempora iure veritatis assumenda?'
    },
    {
        question: 'How to choose an icon to indicate expansion?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure nam officiis, laudantium voluptatum ut repudiandae at ipsam animi? Tempora deserunt consectetur natus delectus aliquam hic eaque rem quis aut? Quis repellat exercitationem esse voluptatem sapiente aspernatur, aliquam reprehenderit aperiam explicabo, minima culpa illum. Quod doloremque tempora iure veritatis assumenda?'
    },
    {
        question: 'wher it should be used ?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure nam officiis, laudantium voluptatum ut repudiandae at ipsam animi? Tempora deserunt consectetur natus delectus aliquam hic eaque rem quis aut? Quis repellat exercitationem esse voluptatem sapiente aspernatur, aliquam reprehenderit aperiam explicabo, minima culpa illum. Quod doloremque tempora iure veritatis assumenda?'
    },


]

export default Main