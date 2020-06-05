import React from "react"
import '../../static/css/styles.css';
import '../../static/css/bootstrap.css';
import  {Helmet}  from "react-helmet"
import {WhatIDo, Header,Navbar,AboutMe,Footer} from "../components";


export default () => (
 <div>
   <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content />
    <meta name="author" content />
    <title>Kovasznai Photo</title>
    {/* Bootstrap core CSS */}
    <link href="css/bootstrap.css" rel="stylesheet" />
    {/* Add custom CSS here */}
    <link href="css/slidefolio.css" rel="stylesheet" />
    {/* Font Awesome */}
    <link href="https://use.fontawesome.com//releases/v5.4.1/css/all.css" rel="stylesheet" />
  </Helmet>
  <Header/>
  <Navbar/>
  <AboutMe/>
  <WhatIDo/>
  {/* Portfolio */}
  <div id="portfolio" className="portfolio">
    <div className="container">
      <div className="row push50">
        <div className="col-md-4 col-md-offset-4 text-center">
          <h2>My work</h2>
          <h3>
            <span className="filter label label-default" data-filter="all">ALL</span>
            <span className="filter label label-default" data-filter="bw">B&amp;W</span>
            <span className="filter label label-default" data-filter="nature">Nature</span>
            <span className="filter label label-default" data-filter="portraits">Portraits</span>
          </h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="gallery">
          <ul id="Grid" className="gcontainer">
            <li className="col-md-4 col-sm-4 col-xs-12 mix bw portraits" data-cat="graphics">
              <a data-toggle="modal" data-target="#portrait1" className="mix-cover">
                <img className="horizontal" src="/img/portrait1-sm.jpg" alt="placeholder" />
                <span className="overlay"><span className="valign" /><span className="title">Portrait 1</span></span>
              </a>                
            </li>
            <li className="col-md-4 col-sm-4 col-xs-12 mix portraits" data-cat="graphics">
              <a data-toggle="modal" data-target="#portrait2" className="mix-cover">
                <img className="horizontal" src="/img/portrait2.jpg" alt="placeholder" />
                <span className="overlay"><span className="valign" /><span className="title">Portrait 2</span></span>
              </a>                
            </li>
            <li className="col-md-4 col-sm-4 col-xs-12 mix nature" data-cat="nature">
              <a data-toggle="modal" data-target="#nature1" className="mix-cover">
                <img className="horizontal" src="/img/nature1.jpg" alt="placeholder" />
                <span className="overlay"><span className="valign" /><span className="title">Nature 1</span></span>
              </a>
            </li>
            <li className="col-md-4 col-sm-4 col-xs-12 mix portraits" data-cat="portraits">
              <a data-toggle="modal" data-target="#portrait3" className="mix-cover">
                <img className="horizontal" src="/img/portrait3.jpg" alt="placeholder" />
                <span className="overlay"><span className="valign" /><span className="title">Portrait 3</span></span>
              </a>
            </li>
            <li className="col-md-4 col-sm-4 col-xs-12 mix portraits" data-cat="portraits">
              <a data-toggle="modal" data-target="#portrait5" className="mix-cover">
                <img className="horizontal" src="/img/portrait5.jpg" alt="placeholder" />
                <span className="overlay"><span className="valign" /><span className="title">Portrait 5</span></span>
              </a>
            </li>
            <li className="col-md-4 col-sm-4 col-xs-12 mix nature" data-cat="nature">
              <a data-toggle="modal" data-target="#nature" className="mix-cover">
                <img className="horizontal" src="/img/nature.jpg" alt="placeholder" />
                <span className="overlay"><span className="valign" /><span className="title">Nature</span></span>
              </a>
            </li>
            <li className="col-md-4 col-sm-4 col-xs-12 mix portraits" data-cat="portrait">
              <a data-toggle="modal" data-target="#portrait4" className="mix-cover green">
                <img className="vertical" src="/img/portrait4.jpg" alt="portrait 4" />
                <span className="overlay"><span className="valign" /><span className="title">Portrait 4</span></span>           
              </a>
            </li>
            <li className="col-md-4 col-sm-4 col-xs-12 mix bw nature all" data-cat="portrait">
              <a data-toggle="modal" data-target="#forest" className="mix-cover green">
                <img className="vertical" src="/img/forest.jpg" alt="Forest" />
                <span className="overlay"><span className="valign" /><span className="title">Forest</span></span>                    
              </a>
            </li>
            <li className="col-md-4 col-sm-4 col-xs-12 mix bw nature all" data-cat="bw">
              <a data-toggle="modal" data-target="#bw1" className="mix-cover green">
                <img className="vertical" src="/img/bw1.jpg" alt="Black and White" />
                <span className="overlay"><span className="valign" /><span className="title">Black &amp; White</span></span>                  
              </a>
            </li>
          </ul>   
          {/* Load Photo in Modal */}			  
          <div className="modal fade" id="portrait1" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Portrait 1</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="Portrait1" src="/img/portrait1.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          <div className="modal fade" id="portrait2" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Portrait 2</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="Portrait1" src="/img/portrait2.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          <div className="modal fade" id="portrait3" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Portrait 3</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="Portrait1" src="/img/portrait3.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          <div className="modal fade" id="portrait4" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Portrait 4</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="Portrait1" src="/img/portrait4.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          <div className="modal fade" id="portrait5" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Portrait 5</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="Portrait1" src="/img/portrait5.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          <div className="modal fade" id="nature" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Nature</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="nature" src="/img/nature.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          <div className="modal fade" id="nature1" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Nature 1</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="nature" src="/img/nature1.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          <div className="modal fade" id="forest" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Forest</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="forest" src="/img/forest.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          <div className="modal fade" id="bw1" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title text-center">Black and White</h4>
                </div>
                <div className="modal-body">
                  <img className="thumbnail" alt="forest" src="/img/bw1.jpg" />
                </div>
              </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
          </div>{/* /.modal */}
          {/* /Load Photo in Modal */}	
        </div>	
      </div>
    </div>
  </div>
  <Footer/>
  </div>

)
