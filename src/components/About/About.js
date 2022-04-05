import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className='border m-16 p-8 divide-y divide-black-900'>
            <div className='m-4'>
                <h2 className='font-bold'> Developed by:</h2>
                <h2>Md. Mahadi Hasan</h2>
                <h2>Jr. Web Dvelopper</h2>
            </div>
            <div className='m-8'>
                <h2 className='font-bold mt-8'> Contact:</h2>
                <h2>1/2 Banadi, Dhaka.</h2>
                <h2>Ph: 0172345678</h2>
                <h2>email: abc@gmail.com</h2>
            </div>


        </div >
    );
};

export default About;