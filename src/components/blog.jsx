import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <section className="colorlib-about" data-section="blog">
          <div className="colorlib-narrow-content">
          <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Read</span>
                <h2 className="colorlib-heading animate-box">Recent Blog</h2>
              </div>

          <div className="row">
          <div className="col-md-4">
         
         




































            <div className ="blog-entry"  >
              

              {/* <a href="https://medium.com/@shruti.shrestha/boosting-cc561db21c5e"  target="_blank" rel="noopener noreferrer" className="blog-img">  */}
              <img src="images/project-boosting.png" style={{height: '300px', "left": "0 !important", "position": "unset !important"}}  />
              <a href="https://medium.com/@shruti.shrestha/boosting-cc561db21c5e"  target="_blank" rel="noopener noreferrer" className="blog-img"/>
            
              
              {/* <img src="images/about.jpg" style={{"left": "0 !important", "position": "unset !important"}}   />*/}
              
              {/* </a> */}
             
             
              <div className ="desc">
                <span><small>Dec 20, 2021</small></span>
                <h3><a href="https://medium.com/@shruti.shrestha/boosting-cc561db21c5e"  target="_blank" rel="noopener noreferrer" className="blog-img"> Boosting in machine learning</a></h3>
                <p>Boosting is used for increasing the performance of decision trees with binary classification. Used mostly for classification than regression. Boosting is an ensemble technique that attempts to create a robust classifier...</p>
              </div>
            </div>
           </div>


         


            <div className="col-md-4">
          
            <div className ="blog-entry"  >
            <img src="images/project-lda.jpg" style={{height: '300px', "left": "0 !important", "position": "unset !important"}}  />
              <a href="https://medium.com/@shruti.shrestha/linear-discriminant-analysis-lda-8e9fc0838fb"  target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/about.jpg" style={{"left": "0 !important", "position": "unset !important"}}   /> </a>
              <div className ="desc">
                <span><small>Dec 15, 2021</small></span>
                <h3>  <a href="https://medium.com/@shruti.shrestha/linear-discriminant-analysis-lda-8e9fc0838fb"  target="_blank" rel="noopener noreferrer" className="blog-img">Linear Discriminant Analysis (LDA)</a></h3>
                <p>Both LDA and PCA are linear transformation techniques: LDA is supervised whereas PCA is unsupervised........</p>
              </div>
            </div>
           </div>

           


            <div className="col-md-4">
         
            <div className ="blog-entry"  >
            <img src="images/project-pca.png" style={{height: '300px', "left": "0 !important", "position": "unset !important"}}  />
              <a href="https://medium.com/@shruti.shrestha/principal-component-analysis-ce7ad9e5ded1"  target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/about.jpg" style={{"left": "0 !important", "position": "unset !important"}}   /> </a>
              <div className ="desc">
                <span><small>Nov 24, 2021</small></span>
                <h3><a href="https://medium.com/@shruti.shrestha/principal-component-analysis-ce7ad9e5ded1"  target="_blank" rel="noopener noreferrer" className="blog-img">Principal Component Analysis</a></h3>
                <p>The First dimension in the figure shows the axis where the biggest variation in the data is a widely used dimension reduction technique which reduces the dimension of our data........</p>
              </div>
            </div>
           </div>

            


         









          </div>
          <div className="row">
              
            <div className="col-md-4">
          <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div className ="blog-entry"  >
            <img src="images/project-knn.jpg" style={{height: '300px',     width:' 236px', "left": "0 !important", "position": "unset !important"}}  />
              <a href="https://medium.com/@shruti.shrestha/knn-k-nearest-algorithm-a70dc9525be4"  target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/about.jpg" style={{"left": "0 !important", "position": "unset !important"}}   /> </a>
              <div className ="desc">
                <span><small>Nov 16, 2021</small></span>
                <h3><a href="https://medium.com/@shruti.shrestha/knn-k-nearest-algorithm-a70dc9525be4"  target="_blank" rel="noopener noreferrer" className="blog-img">KNN — [K Nearest algorithm]</a></h3>
                <p>KNN is a non-parametric classification model. It assumes similar things exist closer. It can be used in both classification and regression.........</p>
              </div>
            </div>
           </div>


            </div>

            <div className="col-md-4">
          <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div className ="blog-entry"  >
           
            <img src="images/project-git.jpg" 
            
            style={{
              height: '300px',
              left: '0 !important',
              position: 'unset !important',
            
             
            }}
              /> 
              <a href="https://medium.com/@shruti.shrestha/git-structure-functionalities-and-commands-db544609c287"  target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/about.jpg" style={{"left": "0 !important", "position": "unset !important"}}   /> </a>
              <div className ="desc">
                <span><small>Apr 22, 2021</small></span>
                <h3><a href="https://medium.com/@shruti.shrestha/git-structure-functionalities-and-commands-db544609c287"  target="_blank" rel="noopener noreferrer" className="blog-img">Git structure and functionalities</a></h3>
                <p>Github keeps track of the change in code, and stores the changed versions of our code so that we can retrieve them whenever needed.....</p>
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
