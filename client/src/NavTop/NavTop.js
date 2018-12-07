import React from 'react';

class NavTop extends React.Component {
    render() {
        return (
                <nav className="navbar navbar-default navbar-static-top" role="navigation">
                  <div className="container">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="/map">
                        <span id="brand" >BwaP</span>
                        <span id="brandsmall">Finish your book? Swap it</span>
                        <span className="glyphicon glyphicon-transfer"></span>
                      </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="/map"><span className="glyphicon glyphicon-globe"></span> Map</a></li>
                        <li><a href="/"><span className="glyphicon glyphicon-user"></span> Profile</a></li>
                        <li ><a href="/login"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
        );
    }
}
export default NavTop;