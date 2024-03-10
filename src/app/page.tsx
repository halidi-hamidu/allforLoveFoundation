import Image from "next/image";
import "./globals.css";
import type { Metadata } from "next";
// import styles from "./page.module.css";
export const metadata: Metadata = {
  title: "Home - all for love",
  description: "all for love foundation",
};
export default function Home() {
  return (
    <>
    <div className="home_hero_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="inner">
                <h1>You Can  Make A  </h1>
                <h1>Difference</h1>

                <p>Help people  affected  by disaster big and  small</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* how_can_you_help */}
      <div className="how_can_you_help">
      <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="inner">
                <div className="heading">
                  <h3>How Can You Help?</h3>
                </div>
                </div>
              </div>
            </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="make_gift_inner">
                <div className="circle">
                  <Image className='img-fluid'  src={'/images/instagram.png'} alt={""} width={100} height={100}></Image>
                </div>
                <div className="descriptions">
                  <h6>MAKE A GIFT</h6>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione placeat nemo maiores mollitia, ipsum repellendus quaerat praesentium tenetur natus autem..</p>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="make_gift_inner">
                <div className="circle">
                  <Image className='img-fluid' src={'/images/instagram.png'} alt={""} width={100} height={100}></Image>

                </div>
                <div className="descriptions">
                  <h6>BECOME A VOLUNTEER</h6>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione placeat nemo maiores mollitia, ipsum repellendus quaerat praesentium tenetur natus autem..</p>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="make_gift_inner">
                <div className="circle">
                  <Image className='img-fluid' src={'/images/instagram.png'} alt={""} width={100} height={100}></Image>

                </div>
                <div className="descriptions">
                  <h6>SEND DONATION</h6>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione placeat nemo maiores mollitia, ipsum repellendus quaerat praesentium tenetur natus autem..</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

 
    
    </>
  )
}
