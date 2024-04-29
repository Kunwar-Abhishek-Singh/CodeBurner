import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
import "./Third_page.css";

const ThirdPage = () => {
  const buttons = ["Learn Express JS", "Learn React JS", "Learn Python", "Learn Node JS", "Learn Laravel", "Learn PHP", "Learn CSS 3", "Learn HTML 5", "Learn JavaScript", "Learn JAVA"]

  return (
    <>
      <Header />

      <div className="main_div_second_page_for_grid_items">
        <div className='two_div_video_section_tag'>
          <div>
            <div class="card mb-3" style={{ maxWidth: "540px", padding: "5%" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./images/React-icon.svg.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">This is the Video for all of you to make yourself proficient in React JS.</p>
                    <Link to={`/video_lectures/${buttons[1]}`}><button class="btn btn-primary">Learn React JS</button></Link>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mb-3" style={{ maxWidth: "540px", padding: "5%" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./images/CSS3_logo.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">This is the Video for all of you to make yourself proficient in CSS 3.</p>
                    <Link to={`/video_lectures/${buttons[6]}`}><button class="btn btn-primary">Learn CSS 3</button></Link>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='two_div_video_section_tag'>
          <div>
            <div class="card mb-3" style={{ maxWidth: "540px", padding: "5%" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./images/html5-logo.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">This is the Video for all of you to make yourself proficient in HTML 5.</p>
                    <Link to={`/video_lectures/${buttons[7]}`}><button class="btn btn-primary">Learn HTML 5</button></Link>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mb-3" style={{ maxWidth: "540px", padding: "5%" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./images/new-php-logo.svg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">This is the Video for all of you to make yourself proficient in PHP.</p>
                    <Link to={`/video_lectures/${buttons[5]}`}><button class="btn btn-primary">Learn PHP</button></Link>

                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='two_div_video_section_tag'>
          <div>
            <div class="card mb-3" style={{ maxWidth: "540px", padding: "5%" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./images/JavaScript-logo.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">This is the Video for all of you to make yourself proficient in JavaScript.</p>
                    <Link to={`/video_lectures/${buttons[8]}`}><button class="btn btn-primary">Learn JavaScript</button></Link>

                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mb-3" style={{ maxWidth: "540px", padding: "5%" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./images/java-logo.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">This is the Video for all of you to make yourself proficient in JAVA CORE.</p>
                    <Link to={`/video_lectures/${buttons[9]}`}><button class="btn btn-primary">Learn JAVA</button></Link>

                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdPage;
