import React, { Component } from "react";
// import SHRUTI_SHRESTHA_RESUME from "./public/docs/SHRUTI_SHRESTHA_RESUME.pdf";
// import Pdf from '../../public/docs/SHRUTI_SHRESTHA_RESUME.pdf';

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
                      Hi, I am Shruti Shrestha. I am currently doing my master's in Data Science and Analytics at Georgia State University(GSU). I am currently working as a graduate research assistant in the Data Mining lab of the Department of Computer Science at GSU. I am fond of data science and machine learning. Prior to this degree, I have 3 plus years of working experience as a machine learning engineer, deep learning engineer, and a software developer. 
                       </p>
<p>
I am currently looking for opportunities for full time starting January 1, 2023 where I could use my working experiences, and academic knowledge to solve real life business problems.

</p>


                   
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desc slider-text-inner">
            <p>
            {/* <a href="/public/docs/SHRUTI_SHRESTHA_RESUME.pdf" target="_blank" rel="noopener noreferrer">Download CV  */}
              <a href='docs/SHRUTI_SHRESTHA_RESUME.pdf' className="cv" target="_blank" rel="noopener noreferrer"> View Resume 
              <i className="icon-download4" style={{paddingLeft: 8}} /></a>
            </p>
          </div>
          </div>
        

        </section>
      </div>
    );
  }
}
