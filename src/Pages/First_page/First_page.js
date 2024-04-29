import React from "react";
import "./First_page.css"
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
import { cookie_validation_context } from "../../components/Context_Component/Context";
import { useContext } from 'react';



function FirstPage() {
    const buttons = ["Learn Express JS", "Learn React JS", "Learn Python", "Learn Node JS", "Learn Laravel", "Learn PHP"]
    const data = useContext(cookie_validation_context);

    return (
        <>
            <div>
                <div >
                    <Header />
                </div>

                <div >
                    {data[0] ?
                        <>
                            {/* <!-- Gallery --> */}
                            
                            <div className="row grid_view_main_div ">
                                {/* <h2>Study Material (Only Theory)</h2> */}
                                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                    <img src="./images/react_js.jpeg"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Boat on Calm Water" />
                                    <Link to={`/study/${buttons[1]}`}><button className="btn btn-primary learning_btn_for_languages">{buttons[1]}</button></Link>

                                    <img src="./images/python-programming.jpg"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Wintry Mountain Landscape" />
                                    <Link to={`/study/${buttons[2]}`}><button className="btn btn-primary learning_btn_for_languages">{buttons[2]}</button></Link>
                                </div>

                                <div class="col-lg-4 mb-4 mb-lg-0">
                                    <img src="./images/node-tools.avif"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Mountains in the Clouds" />
                                    <Link to={`/study/${buttons[3]}`}><button className="btn btn-primary learning_btn_for_languages">{buttons[3]}</button></Link>

                                    <img src="./images/express.png"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Boat on Calm Water" />
                                    <Link to={`/study/${buttons[0]}`}><button className="btn btn-primary learning_btn_for_languages">{buttons[0]}</button></Link>
                                </div>

                                <div class="col-lg-4 mb-4 mb-lg-0">
                                    <img src="./images/laravel.png"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section" alt="Waves at Sea" />
                                    <Link to={`/study/${buttons[4]}`}><button className="btn btn-primary learning_btn_for_languages">{buttons[4]}</button></Link>
                                    <img src="./images/php.jpeg"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Yosemite National Park" />
                                    <Link to={`/study/${buttons[5]}`}><button className="btn btn-primary learning_btn_for_languages">{buttons[5]}</button></Link>
                                </div>
                            </div>
                            {/* <!-- Gallery --> */}
                            {/* <div className="video_section_study_material square border border-danger">
                                <div class="container">
                                    <div class="row grid_view_main_div ">
                                        <div><h2>Study Material (Video Section)</h2></div>
                                        <div class="col">
                                        <img src="./images/react_js.jpeg"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Boat on Calm Water" />
                                    <button className="btn btn-primary learning_btn_for_languages_video_1">{buttons[1]}</button>
                                        </div>
                                        <div class="col-5">
                                        <img src="./images/python-programming.jpg"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Wintry Mountain Landscape" />
                                    <button className="btn btn-primary learning_btn_for_languages_video_1">{buttons[2]}</button>
                                        </div>
                                        <div class="col">
                                        <img src="./images/node-tools.avif"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Mountains in the Clouds" />
                                    <button className="btn btn-primary learning_btn_for_languages_video_1">{buttons[3]}</button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <img src="./images/express.png"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Boat on Calm Water" />
                                    <button className="btn btn-primary learning_btn_for_languages_video_2">{buttons[0]}</button>
                                        </div>
                                        <div class="col-5">
                                        <img src="./images/laravel.png"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section" alt="Waves at Sea" />
                                    <button className="btn btn-primary learning_btn_for_languages_video_2">{buttons[4]}</button>
                                        </div>
                                        <div class="col">
                                        <img src="./images/php.jpeg"
                                        class="w-100 shadow-1-strong rounded mb-4 my_gallery_img_tag_section"
                                        alt="Yosemite National Park" />
                                    <button className="btn btn-primary learning_btn_for_languages_video_2">{buttons[5]}</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </>
                        :


                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="false">
                            <div className="carousel-indicators carousel_buttons">
                                <button style={{ color: "white" }} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1">1st</button>
                                <button style={{ color: "white" }} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                    aria-label="Slide 2">2nd</button>
                                <button style={{ color: "white" }} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                    aria-label="Slide 3">3rd</button>
                                <button style={{ color: "white" }} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                                    aria-label="Slide 4">4th</button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2000">
                                    <img className="carousel_img_collection" src="./images/express.png"
                                        alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link to="/login"><button class="btn btn-primary">{buttons[0]}</button></Link>
                                        {/* <p>Some representative placeholder content for the first slide.</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img className="carousel_img_collection" src="./images/react_js.jpeg"
                                        alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link to="/login"><button class="btn btn-primary">{buttons[1]}</button></Link>
                                        {/* <p>Some representative placeholder content for the second slide.</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img className="carousel_img_collection"
                                        src="./images/python-programming.jpg"
                                        alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link to="/login"><button class="btn btn-primary">{buttons[2]}</button></Link>
                                        {/* <p>Some representative placeholder content for the second slide.</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img className="carousel_img_collection d-block w-100" src="./images/node-tools.avif"
                                        alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link to="/login"><button class="btn btn-primary">{buttons[3]}</button></Link>
                                        {/* <p>Some representative placeholder content for the third slide.</p> */}
                                    </div>
                                </div>

                            </div>


                        </div>
                    }

                </div>

            </div>
        </>
    )
}
export default FirstPage;