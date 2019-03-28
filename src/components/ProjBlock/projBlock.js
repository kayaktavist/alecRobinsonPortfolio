import React from "react";

function ProjBlock() {
    return (
        <div className="container projects">
            <div className="row mt-5">
                <div className="col">
                    <h1>Recent Projects</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-3"><a href="https://kayaktavist.github.io/project-one/"> <img className="img-fluid max-width:100 height:auto" src="images/adaJams.png" alt="placeholder" />ADA Jams</a></div>
                <div className="col-sm-3"> <a href="https://kayaktavist.github.io/Giphy/"> <img className="img-fluid max-width:100 height:auto" src="images/giphy.png" alt="placeholder" />Giph Generator</a></div>
                <div className="col-sm-3"><a href="https://github.com/kayaktavist/FriendFinder"> <img className="img-fluid max-width:100 height:auto" src="images/home.png" alt="placeholder" />Friend Finder</a></div>
                <div className="col-sm-3"></div>
            </div>
            <div className="row">
                <div className="col-12 spacerDiv"></div>
            </div>
            <div class="row">
                <div class="col-12 mb-5 github">
                    <a href="https://github.com/kayaktavist"><h3>GitHub</h3></a>
                </div>
            </div>
        </div>
    );
}

export default ProjBlock;

