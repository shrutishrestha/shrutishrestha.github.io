import React, { Component } from 'react'

export default class Sidebar extends Component {

  onClick = (param) => {
    console.log(param);
    debugger;
  }


  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)', 'marginTop': 38}} />
              <h1 id="colorlib-logo"><a href="index.html">Shruti Shrestha</a></h1>
              <span className="email"><i className="icon-mail"></i> sshrestha8@student.gsu.edu</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                {/* <ul>
            
                  <li className="active"><a href="#introduction"  
                  data-nav-section="introduction">Introduction</a></li>
                  <li ><a href="#expertize" data-nav-section="expertize">Expertize</a></li>
                  <li><a href="#project" data-nav-section="project">Project</a></li>
                 
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul> */}

<ul>
                  <li className="active"><a href="#introduction" data-nav-section="introduction">Introduction</a></li>
                  <li><a href="#expertize" data-nav-section="expertize">Expertize</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Work experience</a></li>
                  <li><a href="#project" data-nav-section="projects">Recent Projects</a></li>
                  <li><a href="#blog" data-nav-section="blog">Recent Blogs</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                 
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://www.linkedin.com/in/shruti-shrestha-6bb52010a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://scholar.google.com/citations?user=zTMdFS8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><i className="icon-google" /></a></li>
              <li><a href="https://github.com/shrutishrestha" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              <li><a href="https://medium.com/@shruti.shrestha/" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              <li><a href="https://twitter.com/shrutishresthaa" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>

                <li><a href="https://www.facebook.com/shruti.shrestha.77" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
              
             
              
                
               
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                 
              </small></p>
              <p><small>
              
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
