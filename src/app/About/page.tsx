import Image from 'next/image';

export default function About(){

    return (
        <>
        <div className="hero_about_us_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner">
                            <h1>About us </h1>
                            <ul>
                                <li>Home {">"} About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about_all_for_love">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="inner">
                            <div className="heading">
                                <div className="logo_section">
                                  <img className='img-fluid' src='/images/logo.jpeg' width="300px" height="300px" alt=""></img>
                                </div>
                                <div className="address_section">
                                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, id.</h4>
                                    <p>P.O.BOX 1203 , </p>
                                    <p>Dar Es salaam</p>
                                    <p>+255 682 110 014</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="body_section">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quas earum corporis suscipit enim fugit similique dolorum id in labore?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a, dignissimos cum iusto quo delectus ad odio vel non eveniet nostrum et possimus, dolorem maxime adipisci, nemo ab. Sequi, facere.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta esse deleniti sed eveniet quos totam odio fugiat porro accusantium. Soluta dolore, dignissimos deserunt quasi eaque adipisci perspiciatis omnis fugiat fugit ducimus, vel dolorem ipsum ullam incidunt nesciunt aspernatur. Deserunt odio, quidem sequi eos molestiae voluptate magnam numquam harum quia?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat mollitia nesciunt esse cum dolore, aliquam dolores qui optio, enim perferendis, animi recusandae reprehenderit saepe vitae eum necessitatibus rem maxime perspiciatis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores maxime omnis! Adipisci qui voluptas magnam itaque hic tempora aut rem. Quisquam ducimus neque laudantium ipsa amet! Quos expedita, blanditiis illo quidem pariatur dolore voluptates modi voluptatem voluptatum asperiores culpa ut unde dolorum soluta aut! Quae error, nostrum, ad voluptatem consequuntur doloribus ipsum qui, quaerat tempora ab in maxime repudiandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mission_vission_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inner">
                            <div className="image_section">
                                    <Image className='img-fluid' src={'/images/gift.png'} alt={""} width={100} height={100}></Image>

                                <h5>Vision</h5>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, repellendus! Aliquam possimus eligendi voluptas dolore et labore perspiciatis autem consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner">
                            <div className="image_section">
                                    <Image className='img-fluid' src={'/images/gift.png'} alt={""} width={100} height={100}></Image>

                                <h5>Mission</h5>
                            </div>
                                <div className="body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, repellendus! Aliquam possimus eligendi voluptas dolore et labore perspiciatis autem consectetur.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner">
                            <div className="image_section">
                                    <Image className='img-fluid' src={'/images/gift.png'} alt={""} width={100} height={100}></Image>

                                <h5>Motto</h5>
                            </div>
                                <div className="body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, repellendus! Aliquam possimus eligendi voluptas dolore et labore perspiciatis autem consectetur.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}