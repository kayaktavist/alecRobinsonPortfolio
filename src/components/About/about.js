import React from "react";

function About() {
    return (
        <div className="container about mt-5">
            <div className="row"> </div>
            <div className="row">
                <div className="col">
                    <h1>About</h1>
                    <div className="row mb-5">
                        <div className="col-sm-3">

                            <img src="images/DSC_1560.jpg" alt="portrait" />
                        </div>

                        <div className="col-sm-8">
                            <p> My name is Alec Robinson. I'm a jack of many trades. I've worked in a variety of fields from guiding, to photography, to outdoor education, to bike mechanic and neighborhood car mechanic. I seek to  integrate my passion for the planet into my development work. Though trained as a full stack dveloper, I specialize in front end design and React. I also work in vanilla JS, jQuery, SQL, and Mongo.  </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;

