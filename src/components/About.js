import React from "react";
import AboutSkills from "./AboutSkills";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="title">About</h2>
      <ScrollAnimation animateIn="fadeIn">
        <div className="qualities">
          <div className="quality">
            <i className="fas fa-rocket fa-4x"></i>
            <h3>Dynamic Software</h3>
            <p>
              I build engaging and dynamic web-applications tailored for the
              client and their users.
            </p>
          </div>
          <div className="quality">
            <i className="fas fa-meteor fa-4x"></i>
            <h3>Full-Stack</h3>
            <p>
              From planning and design, to the implementation of the project, as
              well as future maintenance. I can support the product's full life
              cycle.
            </p>
          </div>
          <div className="quality">
            <i className="fas fa-tachometer-alt fa-4x"></i>
            <h3>Fast Loading</h3>
            <p>Projects are optimized for a fast and fluid user experience.</p>
          </div>
          <div className="quality">
            <i className="fas fa-mobile fa-4x"></i>
            <h3>Responsive Design</h3>
            <p>
              My projects can be designed with mobile, tablet, and desktop
              platforms in mind, for a fully responsive experience.
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <div className="about-btm">
        <div className="bio">
          <div className="portrait"></div>
          <div className="myBio">
            <p>
              I am a Full-Stack developer based out of Atlanta, Georgia. I have
              a passion for UI, animations, and developing intuitive, memorable
              user experiences.{" "}
              <strong>
                I can’t wait to get started bringing your next vision to life.
              </strong>
            </p>
          </div>
        </div>

        <div className="skills">
          <AboutSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
