import React from 'react';
import '../../styles.css'

const contact = () => {
    return (
        <section id="contact" className="contact text-dark">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          {}
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Electronics Store, Jaipur</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p><a href="mailto:garimajain120403@gmail.com">garimajain120403@gmail.com</a></p>
              </div>
            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div> */}
              <div ><button className="text-center btn btn-block btn-outline-success mt-2 mb-2" type="submit">Send Message</button></div>

          </div>

        </div>

      </div>
    </section>
    );
}

export default contact;