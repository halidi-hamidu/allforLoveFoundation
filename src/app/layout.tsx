import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Head from 'next/head';


export const metadata: Metadata = {
  title: "Home - all for love",
  description: "all for love foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      </Head>
      <body>
        <div className="header_navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner_section">
                  <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                      <a className="navbar-brand p-0" href="#"> <Image className="img-fluid" src='/images/logo.jpeg' alt="logo" width={60} height={60}></Image>AllforLove </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navigation_list">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                          </li>
                          
                          <li className="nav-item">
                            <a className="nav-link " aria-="true">Branch</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " aria-="true">Campaign</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " aria-="true">Contact</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " aria-="true">Events</a>
                          </li>
                          
                        </ul>
                        <div className="donate">
                          <button className="nav-link " aria-="true"> <img width="30" height="30" src="https://img.icons8.com/dotty/80/000000/donate.png" alt="donate" />Donate now</button>
                        </div>
                        
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {children}
        <div className="footer_section">
          <div className="section_need_your_help">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="inner_section">
                    <h1>We need you Help!</h1>
                    <p>To bring relief when & where needed most</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta exercitationem maiores architecto tempora nam nesciunt eligendi pariatur, sequi temporibus cum recusandae? Corrupti expedita placeat quas voluptatibus cumque id eius cupiditate.</p>

                    <div className="donate_need_help_button">
                      <button className="nav-link " aria-="true"> <img width="30" height="30" src="https://img.icons8.com/dotty/80/000000/donate.png" alt="donate" />Donate now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_navigation_section">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="logo_section">
                    <Image className="img-fluid" src='/images/logotransparent.png' alt="logo" width={100} height={100}></Image>
                    <h4 className="Allforlove">Allforlove</h4>
                    
                  </div>
                  <p className="slogan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, necessitatibus?</p>
                  <div className="contacts">
                    <div className="mail">
                      <Image src='/images/mail.png' height={20} width={20} alt="mail"></Image>
                      <h6>: info@allforlove.gmail.com</h6>
                    </div>
                    <div className="call">
                      <Image src='/images/call.png' height={20} width={20} alt="call"></Image>
                      <h6> +255 674 585 700</h6>
                    </div>
                    <div className="social_media_links">
                      <Image src='/images/call.png' height={20} width={20} alt="call"></Image>
                      <Image src='/images/call.png' height={20} width={20} alt="call"></Image>
                      <Image src='/images/call.png' height={20} width={20} alt="call"></Image>
                      <Image src='/images/call.png' height={20} width={20} alt="call"></Image>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-1"></div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
