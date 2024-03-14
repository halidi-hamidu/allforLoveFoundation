'use client';
import Image from 'next/image';

const  handleDataSubmit = () => {

}

export default function contacts(){
    return (
        <>
        <div className="hero_contact_us_section">
           <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="inner">
                         <h1>Contact us </h1>
                    </div>
                </div>
            </div>
           </div>
        </div>
        <div className="contact_us_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="inner">
                            <div className="col-md-3">
                                    <div className="contacts">
                                        <h4>Our Contacts</h4>

                                        <div className="email">
                                            <Image src='/images/mail.png' height={20} width={20} alt="mail"></Image>
                                            <h6>: info@allforlove.gmail.com</h6>
                                        </div>
                                        <div className="call">
                                            <Image src='/images/call.png' height={20} width={20} alt="call"></Image>
                                            <h6> +255 674 585 700</h6>
                                        </div>
                                        <a href=""><Image src='/images/instagram.png' height={20} width={20} alt="call"></Image></a>
                                        <a href=""><Image src='/images/facebook.png' height={20} width={20} alt="call"></Image></a>
                                        <a href=""><Image src='/images/x.png' height={20} width={20} alt="call"></Image></a>
                                    </div>
                            </div>
                            <div className="col-md">
                                    <div className="form_section">
                                        <h4>Get intouch </h4>
                                        <p>Feel free to drop a comment below!</p>
                                        <form method="post" onSubmit={handleDataSubmit}>
                                            <input type="text" name="" id="" placeholder='Your name'/>
                                            <input type="email" name="" id="" placeholder='Your Email'/>
                                            <textarea name="" id="" cols={30} rows={10}></textarea>
                                            <button type="submit">Send messages</button>

                                        </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}