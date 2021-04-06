import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import Recaptcha from 'react-recaptcha'

const Contact = (props) => {
    const [recaptchaLoad, setRecaptchaLoad] = useState(false)
    const [isVerified, setIsVerified] = useState(false)

    const recaptchaLoaded = () => {
        setRecaptchaLoad(true);
    }

    const verifiedRecaptcha = (response) => {
        if (response) {
            setIsVerified(true)
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(process.env.NEXT_PUBLIC_EMAIL_JS_USER)
        console.log(process.env.EMAIL_JS_TEMPLATE)
        console.log(process.env.EMAIL_JS_SERVICE)
        if (recaptchaLoad && isVerified) {
            emailjs.sendForm(process.env.EMAIL_JS_SERVICE, process.env.EMAIL_JS_TEMPLATE, e.target, process.env.NEXT_PUBLIC_EMAIL_JS_USER)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            console.error('Please check reCaptcha and try again.')
        }
        e.target.reset()
    }

    return (
        <div id="connect">
            <h3>Connect with <span className="turn-pink">Me!</span></h3>
            <div className="connect-container">
                <form onSubmit={sendEmail}>
                    <div className="full-form">
                        <div className="contact-inputs">
                                <input type="text" className="form-control name" placeholder="Name" name="name" />
                                <input type="email" className="form-control email" placeholder="Email Address" name="email" />
                            
                        </div>
                        <div>
                            <input type="text" className="form-control subject"
                                placeholder="Subject" name="subject" />
                        </div>

                        <div>
                            <textarea className="form-control message" id="" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="submit-recaptcha">
                            <Recaptcha
                                sitekey={process.env.CAPTCHA_SITE_KEY}
                                render="explicit"
                                onloadCallback={recaptchaLoaded}
                                verifyCallback={verifiedRecaptcha}
                            />
                            <input type="submit" value="Send Message" className="submit-btn"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact