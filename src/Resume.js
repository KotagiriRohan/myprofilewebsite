const Resume = () => {
  return (
    <div className="resume">
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/4/w3.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="w3-content w3-margin-top" style={{ maxWidth: 1200 }}>
        {/* <!-- The Grid --> */}
        <div className="w3-row-padding">
          {/* <!-- Left Column --> */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src={process.env.PUBLIC_URL + "/images/resumeimg.jpg"}
                  style={{ width: "100%" }}
                  alt="Avatar"
                />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2>Rohan Kotagiri</h2>
                </div>
              </div>
              <div className="w3-container">
                <p>
                  <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  Undergrad
                </p>
                <p>
                  <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  Hyderabad, India
                </p>
                <p>
                  <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  rohankotagiri10@gmail.com
                </p>
                <p>
                  <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  9291462555
                </p>
                <hr />

                <p className="w3-large">
                  <b>
                    <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                    Skills
                  </b>
                </p>
                <p>Python</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "100%" }}
                  >
                    100%
                  </div>
                </div>
                <p>Machine Learning</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "100%" }}
                  >
                    <div className="w3-center w3-text-white">100%</div>
                  </div>
                </div>
                <p>Data Science</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
                <p>Image Processing</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
                <p>React JS</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
                <p>C++</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
                <br />

                <p className="w3-large w3-text-theme">
                  <b>
                    <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                    Languages
                  </b>
                </p>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "100%" }}
                  ></div>
                </div>
                <p>Telugu</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "85%" }}
                  ></div>
                </div>
                <p>Hindi</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "65%" }}
                  ></div>
                </div>
                <br />
              </div>
            </div>
            <br />

            {/* <!-- End Left Column --> */}
          </div>

          {/* <!-- Right Column --> */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              {/* <!-- <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Aspiring AI developer/Data Scientist</h2> --> */}
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Aspiring AI developer/Data Scientist</b>
                </h5>
                <p>
                  I'm Rohan Kotagiri, Undergrad at Manipal University Jaipur.
                  Aspiring to become an AI developer/Data Scientist. I like
                  working on real-life problems and have high problem-solving
                  skills. I have a deep understanding of the Statistics behind
                  prevailing ML algorithms and the necessary skill to implement
                  them. I also enjoy exploring game development, 3D modeling,
                  and sketching.
                </p>
                <hr />
              </div>
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Education
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Bachelor Degree, Manipal University Jaipur</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>2019 -
                  2023
                </h6>
                <p>CGPA till Second Year is 9.3</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>High School, Meluha International School</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>2017 -
                  2019
                </h6>
                <p>State Board 97% and 23,256 rank in JEE Mains</p>
                <hr />
              </div>
            </div>

            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Projects
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>ASL Alphabet Detection</b>
                </h5>
                <p>
                  American Hand Sign Alphabet Detection with the help of
                  TensorFlow keras and media-pipe.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Recommendation System</b>
                </h5>
                <p>
                  Movie Recommendations using Demographic Filtering,Content
                  Based Filtering and Collaborative Filtering in Python.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>React Netflix Clone</b>
                </h5>
                <p>Single dynamic web page using React JS and TMDB API.</p>
                <br />
              </div>
            </div>

            {/* <!-- End Right Column --> */}
          </div>

          {/* <!-- End Grid --> */}
        </div>

        {/* <!-- End Page Container --> */}
      </div>
    </div>
  );
};

export default Resume;
