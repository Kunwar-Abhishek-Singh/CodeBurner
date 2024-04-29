import React from "react";
import Header from "../../components/Header/Header";
import './Second_page.css';
import { Link } from "react-router-dom";
function SecondPage() {
    const quiz_array = ["react","css","html","php","javascript","java"]
    // console.log()
    return (
        <>
            <Header />
            <div className="main_div_second_page_for_grid_items">
                <div>
                    <div class="card mb-3" style={{ maxWidth: "540px", padding: "5%" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="./images/React-icon.svg.png" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    {/* <h5 class="card-title">Card title</h5> */}
                                    <p class="card-text">This is the quiz created for all of you to check your proficiency in React JS.</p>
                                    <Link to={`/quiz/${quiz_array[0]}`}><button class="btn btn-primary">Start Quiz</button></Link>
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
                                    <p class="card-text">This is the quiz created for all of you to check your proficiency in CSS 3.</p>
                                    <Link to={`/quiz/${quiz_array[1]}`}><button class="btn btn-primary">Start Quiz</button></Link>
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
                                <img src="./images/html5-logo.png" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    {/* <h5 class="card-title">Card title</h5> */}
                                    <p class="card-text">This is the quiz created for all of you to check your proficiency in HTML 5.</p>
                                    <Link to={`/quiz/${quiz_array[2]}`}><button class="btn btn-primary">Start Quiz</button></Link>
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
                                    <p class="card-text">This is the quiz created for all of you to check your proficiency in PHP.</p>
                                    <Link to={`/quiz/${quiz_array[3]}`}><button class="btn btn-primary">Start Quiz</button></Link>

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
                                <img src="./images/JavaScript-logo.png" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    {/* <h5 class="card-title">Card title</h5> */}
                                    <p class="card-text">This is the quiz created for all of you to check your proficiency in JavaScript.</p>
                                    <Link to={`/quiz/${quiz_array[4]}`}><button class="btn btn-primary">Start Quiz</button></Link>

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
                                    <p class="card-text">This is the quiz created for all of you to check your proficiency in JAVA CORE.</p>
                                    <Link to={`/quiz/${quiz_array[5]}`}><button class="btn btn-primary">Start Quiz</button></Link>

                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecondPage;