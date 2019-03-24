import React from "react";
import { Link } from "react-router-dom";

function ProjBlock() {
    return (

        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-3"><Link href="https://kayaktavist.github.io/project-one/"> <img className="img-fluid max-width:100 height:auto" src="adaJams.png" alt="placeholder" />ADA Jams</Link>
                </div>
                <div className="col-sm-3"><Link href="https://kayaktavist.github.io/TriviaGame/"><img className="img-fluid max-width:100 height:auto" src="trivia.png" alt="placeholder" />Trivia Game</Link></div>
                <div className="col-sm-3"> <Link href="https://kayaktavist.github.io/Train-demo/"> <img className="img-fluid max-width:100 height:auto" src="train.png" alt="placeholder" />Train Scheduler</Link></div>
                <div className="col-sm-3"></div>
            </div>
            <div className="row">
                <div className="col-12 spacerDiv"></div>
            </div>

            <div className="row mt-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-3"> <Link href="https://kayaktavist.github.io/Psychic-Game/"> <img className="img-fluid max-width:100 height:auto" src="images/letterGuess.png" alt="placeholder" />Letter Guess Game</Link></div>
                <div className="col-sm-3"> <Link href="https://kayaktavist.github.io/Giphy/"> <img className="img-fluid max-width:100 height:auto" src="images/giphy.png" alt="placeholder" />Giph Generator</Link></div>
                <div className="col-sm-3"><Link href="https://github.com/kayaktavist/FriendFinder"> <img className="img-fluid max-width:100 height:auto" src="images/home.png" alt="placeholder" />Friend Finder</Link></div>
                <div classn="col-sm-1"></div>
            </div>

            <div classn="row mt-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-3"> <Link href="https://calm-depths-33859.herokuapp.com/"> <img className="img-fluid max-width:100 height:auto" src="images/Critters.png" alt="placeholder" />Critters</Link></div>
                {/* <!-- <div className="col-sm-3"> <a href="https://kayaktavist.github.io/Giphy/"> <img className="img-fluid max-width:100 height:auto" src="giphy.png" alt="placeholder">Giph Generator</a></div>
                    <div className="col-sm-3"><a href="https://github.com/kayaktavist/FriendFinder"> <img className="img-fluid max-width:100 height:auto" src="home.png" alt="placeholder">Friend Finder</a></div>
                    <div className="col-sm-1"></div> --> */}

            </div>
        </div>

    );
}

export default ProjBlock;

