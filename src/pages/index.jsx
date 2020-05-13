import React from "react"
import '../../static/css/styles.css';
import '../../static/css/bootstrap.css';
/*import '../../static/js/bootsrap.js';
import '../../static/js/jquery.js';
import '../../static/js/jquery.mixitup.min.js';
import '../../static/js/jquery.validate.min.js';
import '../../static/js/jquery.vegas.js';
import '../../static/js/jquery-scrolltofixed-min.js';
import '../../static/js/script.js';*/
import  {Helmet}  from "react-helmet"

export default () => (
 <div>
   <Helmet>
   <script src="../../static/js/jquery.js" type="text/javascript"></script>
   <script src="../../static/js/bootsrap.js"></script>
   <script src="../../static/js/jquery.mixitup.min.js"></script>
   <script src="../../static/js/jquery.validate.min.js"></script>
   <script src="../../static/js/jquery.vegas.js"></script>
   <script src="../../static/js/jquery-scrolltofixed-min.js"></script>
   <script src="../../static/js/script.js"></script>
   
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
  {/* Header Area */}
  <div id="top" className="header">
    <div className="vert-text">
      <img className="img-rounded" alt="Company Logo" src="/img/logo.png" />
      <h2><em /></h2>
      <ul className="list-inline">
        <li><a className="link_btn1" href="https://www.facebook.com/Kovasznai-Photo-269795847306504/"> <i className="fab fa-facebook-f " /></a></li>
        <li><a className="link_btn2" href="https://www.linkedin.com/in/bal%C3%A1zs-kov%C3%A1sznai-13652b192/"> <i className="fab fa-linkedin " /></a></li>
        <li><a className="link_btn3" href="https://www.instagram.com/balazskovasznai/"><i className="fab fa-instagram " /></a></li>
        <li><a className="link_btn4" href="https://500px.com/balazskovasznai"><i className="fab fa-500px " /></a></li>
        <li><a className="link_btn5" href="mailto:kovasznaibalazs@gmail.com"><i className="far fa-envelope " /></a></li>
      </ul>	
      <br />
    </div>
  </div>
  {/* /Header Area */}
  <div id="nav">
    {/* Navigation */}
    <nav className="navbar navbar-new" role="navigation">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mobilemenu">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="#" className="navbar-brand">Kovasznai Photo</a>
        </div>
        <div className="collapse navbar-collapse" id="mobilemenu">
          <ol className="nav navbar-nav navbar-right text-center">
            <li><a href="#about"><i className="service-icon fa fa-info" />&nbsp;About me</a></li>
            <li><a href="#services"><i className="fas fa-briefcase" />&nbsp;What I do</a></li>
            <li><a href="#portfolio"><i className="service-icon fa fa-camera" />&nbsp;Portfolio</a></li>
          </ol>
        </div>{/* /.navbar-collapse */}
      </div>
    </nav>
    {/* /Navigation */}
  </div>	
  {/* About */}
  <div id="about" className="about_us">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center">
          <h2>About me</h2>
          <p className="lead">My name is Balázs Kovásznai. For years I rode bmx and did acrobatics,i was into photography in that time too,but after three knee surgeries at the age of 18 I  had to stop bmx and acrobatics so that was the time when I really started to take photography more serious. Since that time i tried lot kind of photography, but generally I do not target one specific genre, my primary aim is the expression and enhancement of women’s beauty. The other aim is to show the awesomeness and beautifulness of the action sports to people who are not involved in the actionsports world.In the following galleries the photos are collected not according to their genre either, which would be difficult to do so, as in most of the cases they overlap each other. As an introduction these few lines are fair enough, the pictures will reveal much more about my work. If you like them, I happily take requests to make similar photos. Have fun and enjoy thumbing through the galleries and viewing my photos! </p>
        </div>
      </div>
    </div>
  </div>
  {/* /About */}
  {/* Services */}
  <div id="services" className="services">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4 text-center">
          <h2>What I do</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="service-item">
            <i className="service-icon fa fa-camera-retro fa-3x" />
            <h3>Portrait</h3>
            <hr />
            <p /><h4>Every kind of human depiction:</h4>
            <div>Portrait</div>
            <div>Glamour</div>
            <div>Nude</div>
            <div>Fashion</div>
            <p />
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="service-item">
            <i className="service-icon fa fa-camera fa-3x" />
            <h3>Sport</h3><hr />
            <p /><h4>Every kind of sports:</h4>
            <div>Action</div>
            <div>Motorsports</div>
            <div>Teamsports</div>
            <div>Individual Sports</div><p />
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="service-item">
            <i className="service-icon fa fa-globe fa-3x" />
            <h3>Event</h3><hr />
            <p /><h4>Every kind of events:</h4>
            <div>Concerts</div>
            <div>Teambuildings</div>
            <div>Sport events</div>
            <div>Family events</div><p />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Services */}
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
  {/* /Portfolio */}
  {/* Contact */}
  <div id="contact">
    <div className="container">
      <div className="row">
        <h4><em> © Kovasznai Photo</em></h4>
        {/* contact form starts */}
        {/* contact form ends */}		
        {/* /Contact */}
        {/* Footer */}
        {/* /Footer */}
        {/* Bootstrap core JavaScript */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* Slideshow Background  */}
        {/* /Slideshow Background */}
        {/* Mixitup : Grid */}
        {/* /Mixitup : Grid */}	
        {/* Custom JavaScript for Smooth Scrolling - Put in a custom JavaScript file to clean this up */}
        {/* Navbar */}
        {/* /Navbar*/}
      </div></div></div></div>

)
