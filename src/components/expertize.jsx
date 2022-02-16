
import React, { Component } from "react";

export default class Expertize extends Component {
  render() {
    return (
      <div id="expertize">
       
        <section className="colorlib-about" data-section="expertize">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
              
              <div className="desc">
                    <h3>Computer Vision </h3>
                    <p>
                    Computer vision is a task for analyzing, processinng images, videos for better classification, segmentation or other prediction related tasks. It includes image processing, model traning and visualizations. I have worked on projects like medical imaging, solar flare prediction, super resolution using these deep learning based convolutional networks.

                    </p>
                  </div>
              </div>
              </div>


              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Machine Learning </h3>
                    <p>
                    Machine learning is a method of data analysis whcih is broadly use to data analysis purposes and imitate intelligent human behavior. I have worked in news classification, resommendation systems, spam filtering related machine learning tasks.
                    </p>
                  </div>
                </div>
              </div>
              
              
              
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                    As a software developer, I have worked as a bachend developer for Hamro Patro app.
                    </p>
                  </div>
                </div>
              </div>
           
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
