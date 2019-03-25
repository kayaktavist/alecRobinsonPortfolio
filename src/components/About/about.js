import React from "react";

function About() {
    return (
        <div className="container about m-5">
            <div className="row"> </div>
            <div className="row">
                <div className="col">
                    <h1>About</h1>
                    <div className="row mb-5">
                        <div className="col-sm-3">

                            <img src="images/DSC_1560.jpg" alt="portrait" />
                        </div>

                        <div className="col-sm-8">
                            <p>

                                My name is Alec Robinson. I'm a jack of many trades. I've worked in a variety of fields from guiding, to photography, to education, to bike mechanic and neighborhood car mechanic. </p>

                            <p>My greatest passion is ecology, conservation, and the outdoors. For me, natural environments are a way to feel whole and recoonect with something deeper than myself.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;

