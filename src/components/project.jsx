import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div id="project">
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/project-solar.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Solar Flare Super resolution metric</a></h3>
											<span>Details</span>As magnetograms contains Gauss values, normal metrics are not useful measuring the supersolution. This project aims to develop new evaluation metrics for the same.
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/solar-flare-classification"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/project-22.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Solar Flare Prediction</a></h3>
											<span>Details</span>
											Use deep learning networks like AlexNet, ResNet to better classify the solar flares as A, M, X, or C class flares.
																						<p className="icon">
												<span><a href="https://github.com/shrutishrestha/SolarFlarePrediction"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/project-polyp.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Polyp segmentation</a></h3>
											<span>Details</span>Ensemble method on ResNet-34 and EfficientNet-B2 with data augmentation, CutMix regularizer, and Tversky loss.
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/POLYP_CCNET"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project-33.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">CCNet</a></h3>
											<span>Details</span>Polyp Segmentation using Criss-Cross Network (CCNet) for obtaining full-image contextual information in a very effective and efficient way, which uses a novel criss-cross attention module that harvests the contextual information of all the pixels on its criss-cross path
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/POLYP_CCNET"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>


							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/project-ebay.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Comparison of Amazon and eBay cellphones</a></h3>
											<span>Details</span>Implemented Django and scrapy libraries for building User Interface to let them compare similar phones fetched from these websites
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/Amazon-eBay-cellphone-comparison"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/project-streaming.jpg)'}}>
									<div className="desc">
										<div className="con"> 
											<h3><a href="work.html">Spotify Music Streaming Prediction</a></h3>
											{/* <span>Details</span>Project 2 */}
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/music-streaming-prediction"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project-10.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Credict Card Fraud Detection</a></h3>
											{/* <span>Website</span>Project 1 */}
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/Credict-Card-fraud-Detection"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							
						
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/project-11.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Women in Data Science Datathon 2022</a></h3>
											{/* <span>Details</span>Project 3 */}
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/Women-in-Data-Science-Datathon-2022"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>



							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/project-house.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">House-Prices Prediction</a></h3>
											<span>Details</span>Contains 79 variables describing every aspect of residential homes in Ames,Iowa. Kaggle challenge which is for predicting the final price of each home with regression techniques. 
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/House-Prices---Advanced-Regression-Techniques"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>




							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/prjectRS.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Recommendation System</a></h3>
											<span>Details</span>Built using collaborative and content filtering,where it studies the behavior of similar users, and showing similar items to our last purchase or liked before. 
											<p className="icon">
												<span><a href="https://github.com/shrutishrestha/Recommendation_System"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>




















							
						</div>
					</div>
				</section>
      </div>
    )
  }
}