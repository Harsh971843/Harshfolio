import React, { useState } from 'react';
import Sectiontitle from '../component/Sectiontitle';
import axios from 'axios';

function Contact() {
    const [name, setName1] = useState('');
    const [email, setEmail1] = useState('');
    const [message, setMessage1] = useState('');
    const currentDate = new Date().toISOString().split('T')[0]; // Get only the date portion

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Sheety API expects the data to be sent in a specific structure
        const data = {
            sheet1: {
                Name_H : name,
                Email_H : email,
                Message_H : message,
                Date_H : currentDate,
            }
        };

        axios.post('https://sheetdb.io/api/v1/fi7tgbv5n8dyo', data)
            .then(() => {
                alert('Message Sent');
                setName1('');
                setEmail1('');
                setMessage1('');
            })
            .catch((error) => {
                console.error(error);
                alert('Message not sent');
            });
    };

    return (
        <div className="bg-primary dark:bg-black py-10">
            <Sectiontitle title="Contact" subtitle="Get in touch" />
            <div className="justify-center flex flex-row items-center gap-10 py-12 sm:flex sm:flex-col">
                <div>
                    <div className="contact-container">
                        <p className="text-2xl font-bold text-black dark:text-white">&#123;</p>
                        <p className="font-bold">
                            <span className="key text-yellow-300 dark:text-white text-xl">"Name"</span><span className="text-white ">:</span> <span className="value dark:text-white text-red-600 text-xl">"Harsh"</span><span className="text-white">,</span>
                        </p>
                        <p className="font-bold">
                            <span className="key text-red-600 dark:text-white text-xl">"Email"</span><span className="text-white">:</span> <span className="value dark:text-white text-green-400 text-xl">"harsh.verma2708@gmail.com"</span><span className="text-white">,</span>
                        </p>
                        <p className="font-bold">
                            <span className="key dark:text-white text-blue-400 text-xl">"Country"</span><span className="text-white">:</span> <span className="value dark:text-white text-red-600 text-xl">"India"</span><span className="text-white">,</span>
                        </p>
                        <p className="font-bold">
                            <span className="key text-yellow-400 dark:text-white text-xl">"State"</span><span className="text-white">:</span> <span className="value dark:text-white text-purple-500 text-xl">"Delhi"</span><span className="text-white">,</span>
                        </p>
                        <p className="font-bold">
                            <span className="key dark:text-white text-orange-500 text-xl">"City"</span><span className="text-white">:</span> <span className="value dark:text-white text-green-400 text-xl">"New Delhi"</span><span className="text-white">,</span>
                        </p>
                        <p className="text-2xl font-bold text-black dark:text-white">&#125;</p>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="text-black dark:text-white">Name</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e) => setName1(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="text-black dark:text-white">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail1(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="text-black dark:text-white">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage1(e.target.value)}></textarea>
                        </div>
                        <button className="btn border-2 border-green-400 text-white bg-green-400  px-5 py-1 sm:py-2 rounded hover:bg-white hover:text-black hover:border-black  dark:border-green-400 dark:text-green-400 dark:bg-black dark:hover:bg-green-400 dark:hover:text-white transition duration-300" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
