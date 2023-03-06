import React from 'react';

function Contact(props) {
    return (
        <div className="section" id="contact">
            <h2>Contact Me</h2>
            <div className="divContact">
            <form action="mailto:marvin-wachtling@gmx.de" target="_blank" method="get">
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
                <input type="text" name="eMail" placeholder="E-Mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                <textarea name="taInput" placeholder="What can i do for you?" required></textarea>
                <button id="formSubmit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Contact;