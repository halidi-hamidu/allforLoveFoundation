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
          <div className="col-md-12">
            <div className="inner">
                <h1>You Can  Make A  </h1>
                <h1>Difference</h1>

                <p>Help people  affected  by disaster big and  small</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* start:breif_about_us */}

      <div className="breif_about_us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_section">
                <div className="description">
                  <h3>About us</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis repellendus inventore repudiandae aliquid dolor laboriosam consequuntur eligendi ratione distinctio, omnis possimus perferendis ipsa praesentium et voluptatibus quisquam, itaque nisi exercitationem laudantium. Nemo mollitia, est a optio in molestias et quibusdam! Rerum, enim. Amet molestiae atque necessitatibus, minus nam animi.</p>
                </div>
                <div className="image_section">
                  <Image className= 'img-fluid' src='/images/logo.jpeg' width={300} height={300} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end:breif_about_us */}
      {/* start:brief_latest_events */}
      <div className="brief_latest_events">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3>Latest Events</h3>
            </div>
          </div>
          <div className="events">
            <div className="row">
              <div className="col-md-6">
                <div className="inner_section" data-aos="zoom-in-up">
                  <Image className="img-fluid" src='/images/heroBg.jpg' width={200} height={200} alt=""></Image>
                  <div className="descriptions">
                    <i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique labore consequatur quisquam illo illum rerum quia tempora delectus atque ipsam.</p>
                    </i>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6">
                <div className="other_events">
                  <div className="image_section">
                    <Image className="img-fluid" src='/images/event1.jpg' width={500} height={200} alt=""></Image>
                  </div>
                  <div className="descriptions">
                    <i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique labore consequatur quisquam illo illum rerum quia tempora delectus atque ipsam.</p>
                    </i>
                  </div>
                </div>
                <div className="other_events">
                  <div className="image_section">
                    <Image className="img-fluid" src='/images/needHelp.jpg' width={500} height={200} alt=""></Image>
                  </div>
                  <div className="descriptions">
                    <i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique labore consequatur quisquam illo illum rerum quia tempora delectus atque ipsam.</p>
                    </i>
                  </div>
                </div>
                <div className="other_events">
                  <div className="image_section">
                    <Image className="img-fluid" src='/images/heroBg2.jpg' width={500} height={200} alt=""></Image>
                  </div>
                  <div className="descriptions">
                    <i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique labore consequatur quisquam illo illum rerum quia tempora delectus atque ipsam.</p>
                    </i>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end:brief_latest_events */}

      {/* start: how_can_you_help */}
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
              <div className="make_gift_inner" data-aos="zoom-in-up">
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
              <div className="make_gift_inner" data-aos="zoom-in-up">
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
              <div className="make_gift_inner" data-aos="zoom-in-up">
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

      {/* end : how_can_you_help */}

      
      
 
    
    </>
  )
}
