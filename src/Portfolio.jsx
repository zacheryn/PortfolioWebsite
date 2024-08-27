import React, { useState, useEffect, Fragment } from "react";
import headshot from './headshot.png';
import './App.css';
import { CSSTransition } from "react-transition-group";

const PInfo_html = <div>
  <div>
    <img src={headshot} alt="Headshot" />
  </div>
  <p>
    I am a undergraduate student studying at the University of Michigan - Ann Arbor, and I will be graduating December, 2024.  I have worked my way through school, working over 20 hours every week on top of full-time schooling.  This shows my dedication and ability to put hard work into acheiving my goals.
  </p>
  <ul>
    <li>
      Name: Zachery Nagy
    </li>
    <li>
      Email: zacherynagy1421@gmail.com
    </li>
    <li>
      Websites:
      <ul>
        <li>
          <a href="https://github.com/zacheryn">https://github.com/zacheryn</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zachery-nagy/">https://www.linkedin.com/in/zachery-nagy/</a>
        </li>
      </ul>
    </li>
    <li>
      Skills:
      <ul>
        <li>
          Programming Languages: C/C++ (Expert), Python (Expert), Java (Intermediate), Javascript (intermediate), HTML (Intermediate)
        </li>
        <li>
          Databases: Oracle SQL (Expert), Sqlite3 (Intermediate), MongoDB (Beginner)
        </li>
        <li>
          Git (Expert)
        </li>
        <li>
          Audodesk softwares: AutoCAD (Intermediate), Inventor (Expert)
        </li>
      </ul>
    </li>
  </ul>
</div>;

const WorkExperience_html = <div>
  <div>
    <h2>
      Wok Cook
    </h2>
    <h3>
      P.F. Chang's
    </h3>
    <p>
      August, 2021 - Present
    </p>
    <p>
      Romulus, MI
    </p>
    <p>
      Responsibilites:
      <ul>
        <li>
          Cook high quality food in a fast paced environment
        </li>
        <li>
          Maintain a clean workstation
        </li>
        <li>
          Thoroughly clean restaurant for closing
        </li>
      </ul>
    </p>
  </div>
  <hr />
  <div>
  <h2>
      Shift Manager
    </h2>
    <h3>
      McDonald's
    </h3>
    <p>
      April 2019 - May, 2021
    </p>
    <p>
      Lincoln Park, MI
    </p>
    <p>
      Responsibilites:
      <ul>
        <li>
          Managed Inventory
        </li>
        <li>
          Managed sales
        </li>
        <li>
          Managed staf
        </li>
        <li>
          Ensured food safety standards
        </li>
      </ul>
    </p>
  </div>
</div>;

const Education_html = <div>
  <h1>
    Computer Science - BS
  </h1>
  <h2>
    University of Michigan - Ann Arbor
  </h2>
  <p>
    September, 2020 - Decemeber, 2024
  </p>
  <p>
    GPA: 2.912
  </p>
  <dl>
    <dt>
      Courses
    </dt>
    <dd>
      Data Structs and Algorithms
    </dd>
    <dd>
      Intro to Computer Security
    </dd>
    <dd>
      Foundations of Computer Science
    </dd>
    <dd>
      Intro to Computer Organization
    </dd>
    <dd>
      Web Systems
    </dd>
    <dd>
      Intro Artificial Intelegence
    </dd>
    <dd>
      Database Management Systems
    </dd>
    <dd>
      Applied GPU Programming
    </dd>
  </dl>
</div>;

const PProj_html = <div>
  <div>
    <h1>
      Textia
    </h1>
    <p>
      A console-based text adventure game written in solely C++. It has multiple locations with free travel between them, ANSI escape codes to add more color into the text, and working audio using XAudio2.
    </p>
  </div>
  <hr />
  <div>
    <h1>
      Wikipedia Search Engine
    </h1>
    <p>
      A search engine written in Python using Flask which uses TF-IDF to find relative Wikipedia pages (unaffiliated with Wikipedia).  I also created the index used in this search engine by sending the html of the Wikipedia pages through several Map-Reduce stages.
    </p>
  </div>
  <hr />
  <div>
    <h1>
      Variational Autoencoder
    </h1>
    <p>
    A neural network, written with Python's Pytorch library, which converts images into vectors of numbers and those same vectors back into the same pictures. The primary use is for compression.
    </p>
  </div>
</div>;

function Portfolio() {
  const [info, setInfo] = useState(PInfo_html);

  const Button = ({ as, children, filled, secondary, ...rest }) => {
    const that = {
      as
    }
    return (
      <that.as className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}`} {...rest} >
        {children}
        <span/>
        <span/>
        <span/>
        <span/>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
      </that.as>
    )
  }
  Button.defaultProps = {
    as: 'Button'
  };

  const buttonPadding = {
    marginLeft: '10px',
    marginRight: '10px'
  };

  return (
    <Fragment>
      <div className="Header">
        <nav className="Nav">
          <Button role="button" style={buttonPadding} onClick={(event) => {
            event.preventDefault();
            setInfo(PInfo_html);
          }}>
            Personal Info
          </Button>
          <Button role="button" style={buttonPadding} onClick={(event) => {
            event.preventDefault();
            setInfo(WorkExperience_html);
          }}>
            Work Experience
          </Button>
          <Button role="button" style={buttonPadding} onClick={(event) => {
            event.preventDefault();
            setInfo(Education_html);
          }}>
            Education
          </Button>
          <Button role="button" style={buttonPadding} onClick={(event) => {
            event.preventDefault();
            setInfo(PProj_html);
          }}>
            Projects
          </Button>
        </nav>
      </div>
      <div className="Info">
        {info}
      </div>
      </Fragment>
  );
}

export default Portfolio;
