import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="introduction">
        <section className="colorlib-about" data-section="introduction">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>

                        I am studying master of data science and analytics at Georgia State University. I love Big Data and AI.
                      </p>
                      <p>
                      A passionate computer and technology fanatic, driven by the hunger to learn more in this arena. A web developer with research
interest in new technologies. A self-motivated person with the ability to think through a problem. Proactive to learn new things in life
both personally and professionally.

                      Skilled Front End Developer experienced in developing scalable, high quality, user-friendly and bug-free web platform collaborating with large team of different expertise. Experienced in writing optimized and scalable code backed up with test.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
