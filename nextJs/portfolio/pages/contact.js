
import emailjs from 'emailjs-com';

const Contact = (props) => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.EMAIL_JS_SERVICE, process.env.EMAIL_JS_TEMPLATE, e.target, process.env.EMAIL_JS_USER)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div>
                        <div>
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div>
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact