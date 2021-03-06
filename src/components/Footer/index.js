export default function Footer() {
    return (
        <footr>
  <div className="footer ">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="contact_bg">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Contact us</h2>
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Your Name" type="text" name="Your Name" />
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Your Email" type="text" name="Your Email" />
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Your Phone" type="text" name="Your Phone" />
                </div>
                <div className="col-md-12">
                  <textarea className="textarea" placeholder="Message" type="text" name="Message" defaultValue={""} />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button className="send">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12 border_top">
          <form className="news">
            <h3>Newsletter</h3>
            <input className="newslatter" placeholder="ENTER YOUR MAIL" type="text" name=" ENTER YOUR MAIL" />
            <button className="submit">Subscribe</button>
          </form>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
              <div className="address">
                <ul className="loca">
                  <li>
                    <a href="#"><img src="icon/loc.png" alt="#" /></a>Locations
                  </li><li>
                    <a href="#"><img src="icon/call.png" alt="#" /></a>+12586954775 </li>
                  <li>
                    <a href="#"><img src="icon/email.png" alt="#" /></a>demo@gmail.com </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
              <ul className="social_link">
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free  html Templates</a></p>
      </div>
    </div>
  </div>
</footr>


    )
}
