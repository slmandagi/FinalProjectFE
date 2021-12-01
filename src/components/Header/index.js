import axios from "axios";
import React, {useState, useEffect} from 'react';

export default function Header() {
  const [features, setFeatures] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3004/header").then(res => setFeatures(res.data))
    }, [])
    return (
      
        <header>
  {/* header inner */}
  <div className="header-top">
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col logo_section">
            <div className="full">
              <div className="center-desk">
                <div className="logo">
                  <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9">
            <div className="menu-area">
              <div className="limit-box">
                <nav className="main-menu ">
                  <ul className="menu-area-main">
                    <li className="active"> <a href="index.html">Home</a> </li>
                    <li> <a href="about.html">About</a> </li>
                    <li> <a href="concerts.html">Concerts </a> </li>
                    <li> <a href="gallery.html">Gallery</a> </li>
                    <li> <a href="contact.html">Contact</a> </li>
                    <li> <a href="#contact">login</a> </li>
                    <li> <a className="last_manu" href="#"><img src="images/search_icon.png" alt="#" /></a> </li>
                  </ul>
                </nav>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end header inner */}
    {/* end header */}
    <section className="slider_section">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-bg">
                      <span>{}</span>
                      <h1>MUSIC BAND EVER</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                      <a href="#">Music &amp; Entertainment</a> <a href="#">Buy Tickets </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-bg">
                      <span>The Best</span>
                      <h1>MUSIC BAND EVER</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                      <a href="#">Music &amp; Entertainment</a><a href="#">Buy Tickets </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-bg">
                      <span>The Best</span>
                      <h1>MUSIC BAND EVER</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                      <a href="#">Music &amp; Entertainment</a> <a href="#">Buy Tickets </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <i className="fa fa-long-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </section>
  </div>
</header>



    )
}
