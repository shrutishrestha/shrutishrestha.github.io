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
                      Hi I am Shruti Shrestha. I am currently doing my master in Data Science and Analytics at Georgia State University. i am working as a graduate research assitant in the Data Mining lab of Department of Computer Science of Georgia State University. I am fond of data science and machine learning. Prior to this degree I have 3 plus years of workign experience as a machine learning engineer, deep learning engineer and a software developer. 
I am currently looking for opportunities for summer internship, 2022 where I could use my working experiences, and academic knowledge for solve real life business problems.
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
