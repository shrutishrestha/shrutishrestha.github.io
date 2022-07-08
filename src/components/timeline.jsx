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
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
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
                        Machine Learning Engineer Intern at Georgia State University, Research Solutions <span>May 2022 - Present</span>
                        </h2>
                        <p>
                
                        • Optimization of systems: CPU, GPU, memory usage and load-times. Decreased deep learning training run time by 30%. <br/>
                        • Perform NVIDIA DALI for software performance benchmarking, profiling, and optimizations. <br/>
                        • Conduct research in Graph neural network for intrusion-detection-system. <br/>
                        </p>
                      </div>
                    </div>
                  </article>






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
                        Graduate Research Assistant at Georgia State University Atlanta, Georgia <span>August 2021-April 2022</span>
                        </h2>
                        <p>
                
• Conduct Research, implement, and test deep learning architectures and physics-based evaluation metrics for Solar
Magnetograms Super Resolution Project. <br />
• Performed data labeling, data exploration, data cleaning, and hyper-parameter tuning to optimize the accuracy and loss
for the super-resolution procedure of the Helio-seismic and Magnetic Image (HMI) dataset. <br />
• Developed Solar Event Database to get the association between Solar Flares, Coronal Mass Ejection, and Active Region. <br />
• Apply CNN based models to predict flares present in ≥M1.0 where AlexNet produced more TSS than ResNet by 2%. <br />
• Decreased deep learning training time by 30%, using NVIDIA Dali library. <br />
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
                        • Developed and implemented a deep learning model to perform semantic image segmentation of polys from endoscopy image
embedding Criss-Cross Attention Mechanism with Resnet-34 and Transposed Convolution. <br />
• Analyzed and compared the performance of different models like UNets, ResNets, Transposed Convolution, and DeepLab. <br/>
• Published a paper and presented the implementation of ensemble method on ResNet-34 and EfficientNet-B2 with data. <br/>
augmentation, CutMix regularizer, and Tversky loss at the “Medieval 2020 Medico automatic polyp segmentation challenge”,
with increased 3% F1 accuracy compared to ResNet-34 architecture. <br/>
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
                        • Deployed a News Classification project using Multinomial Naive Bayes, resulting in 94% accuracy. <br/>
• Improved spam detection by 10% using Recurrent Neural Network over the old string filtering process. <br/>
• Led a collaborative filtering based recommendation system project to send weekly updates to the users, which increased
user activities in the Hamro Patro app by 30%. <br/>
• Managed backend services for the Hamro Patro App and Website. <br/>
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
