import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                        Graduate Research Assistant at Georgia State University Atlanta, Georgia <span>August 2021-present</span>
                        </h2>
                        <p>
                        • Research for developing deep learning architectures and physics based evaluation metrics for Solar Magnetograms Super Resolution. Implemented and tested different Super Resolution techniques using SRCNN, Residual Nets.
<br/>• Performed data labelling, data exploration, data cleaning, and hyper-parameter tuning to optimize the accuracy and loss for the
super resolution procedure of the Helio-seismic and Magnetic Image (HMI) dataset.
<br/>• Applied CNN based models for predicting flares present in ≥M1.0, where AlexNet gave 3% more True Skill Statistics than the ResNet.
<br/>• Developed Solar Event Database to get association between Solar Flares, Coronal Mass Ejection, and Active Region of different sites.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                         Research Assistant at Nepal Applied Mathematics and Informatics Institute for research (NAAMII)  <span>June 2020-July 2021</span>
                        </h2>
                        <p>
                        • Developed and implemented a deep learning model to perform semantic image segmentation of polys from endoscopy images embedding
Criss-Cross Attention Mechanism with Resnet-34 and Transposed Convolution.<br/>
• Analyzed and compared the performance with different ablation studies, UNets, ResNets, and DeepLab models. Recall score improved
from 59% to 66%, using transposed convolution with an attention mechanism. Performed data preprocessing and hyper-parameter tuning.<br/>
• Published a paper and presented the implementation of ensemble method on ResNet-34 and EfficientNet-B2 with data augmentation,
CutMix regularizer, and Tversky loss at the “Medieval 2020 Medico automatic polyp segmentation challenge”, with increased 3% F1
accuracy compared to ResNet-34 architecture.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                        Software Engineer / Machine Learning Engineer at Hamro Patro Inc.   <span>December 2017-December 2019</span>
                        </h2>
                        <p>
                        • Deployed a News Classification project using Multinomial Naive Bayes, resulting in 94% accuracy.<br/>
• Accomplished 10% improvement on spam detection using Recurrent Neural Network over the old process.<br/>
• Led a collaborative filtering based recommendation system project to send weekly updates to users; increased user activities in the
Hamro Patro app by 30%.<br/>
• Managed backend services for the Hamro Patro App and Website.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
