import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import { useNavigate } from "react-router-dom";
import { jwt_Authenticate, signout_student_data } from "../../API/Apicall";
import PrivateComponent from "../Private_component/PrivateComponent";
import { cookie_validation_context } from "../Context_Component/Context";
import { useParams } from "react-router-dom";
import text_logo from "../../../src/images/text_logo.png";


const Header = () => {
  const { topper_name } = useParams();
  const [data, setData] = useContext(cookie_validation_context);
  // alert(data)
  const Navigate = useNavigate();
  // const [cookies] = useCookies(['myCookie']);
  const [isLogout, setIsLogout] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["jwtoken"]);
  const [cookieAuthentication, setCookieAuthentication] = useState(false);

  const logoutHandler = async () => {
    var cookie_token_credential = { "jwtoken": cookies.jwtoken }
    JSON.stringify(cookie_token_credential)
    const cookie_deactivation = await signout_student_data(cookie_token_credential);
    setIsLogout(true);
    setData(false);
    console.log("removing jwtoken from the cookies");
    removeCookie("jwtoken");
    console.log(
      "start processing for log out and switching the page for login finally"
    );

    Navigate("/login");
    console.log("successfully switched to login page");
  };
  // console.log(cookies)

  //for cookie authentication
  var cookies_token = { jwtoken: cookies.jwtoken };
  JSON.stringify(cookies_token);
  const cookie_jwt_Authentication = async () => {
    const auth_response = await jwt_Authenticate(cookies_token);
    console.log(auth_response);
    if (auth_response.data.auth_status === true) {
      setCookieAuthentication(true);
      setData(true);
    } else {
      // alert("Plzz Login First (Enter your login credentials) !!!!")
      Navigate("/")
      setCookieAuthentication(false);
      removeCookie("jwtoken");
    }
  };
  useEffect(() => {
    if (cookies.jwtoken && !isLogout) {
      cookie_jwt_Authentication();
    }
  }, [cookies.jwtoken]);

  // const cookie_auth =async ()=>{
  //   const auth_status = await Cookie_Authentication()
  //   setCookieAuthentication(auth_status)
  // } const auth_status = await Cookie_Authentication()

  // useEffect(()=>{
  //   cookie_auth()
  // },[])

  // ----- hamburger useState ----

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav >
        <div id="navbar">
          <nav class="navbar navbar-expand-lg navbar-light fixed-top  "
            style={{ backgroundColor: "rgba(17, 0, 255, 0.5)" }}>
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarNavDropdown" >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <div  class="nav-link active" aria-current="page"><img src={text_logo}  style={{width:"200px"}}/></div>
                  </li>
                  <li class="nav-item">
                    <Link to="/" style={{ color: "white" }} class="nav-link active" aria-current="page">Home</Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/study" style={{ color: "white" }} class="nav-link">About</Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/" style={{ color: "white" }} class="nav-link" >Contact</Link>
                  </li>
                 



                  {!cookieAuthentication ? (
                    <>
                      <li className="nav-item">
                        <Link to="/login" style={{ color: "white" }} className="nav-link " >
                          Login
                        </Link>

                      </li>
                      <li className="nav-item">
                        <Link to="/signup" style={{ color: "white" }} className="nav-link">Sign Up</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item dropdown">
                        <a style={{ color: "white" }}  class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Express JS</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a class="dropdown-item">Middlewares</a></li>
                          <li><a class="dropdown-item">Routing</a></li>
                          <li><a class="dropdown-item">Error Handling</a></li>
                          <li><a class="dropdown-item">Templating Engines</a></li>
                          <li><a class="dropdown-item">Database Integration</a></li>
                          <li><a class="dropdown-item">Authentication and Authorization</a></li>
                          <li><a class="dropdown-item">ResTful API's</a></li>
                          <li><a class="dropdown-item">Security</a></li>
                          <li><a class="dropdown-item">Testing</a></li>
                          <li><a class="dropdown-item">Performance Optimization</a></li>
                          <li><a class="dropdown-item">Deployment</a></li>
                          <li><a class="dropdown-item">WebSockets & Real Time Communication</a></li>

                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a style={{ color: "white" }}  class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">React JS</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a class="dropdown-item">Components</a></li>
                          <li><a class="dropdown-item">Naming Conventions</a></li>
                          <li><a class="dropdown-item">Environment Variables</a></li>
                          <li><a class="dropdown-item">JSX</a></li>
                          <li><a class="dropdown-item">Props</a></li>
                          <li><a class="dropdown-item">State</a></li>
                          <li><a class="dropdown-item">Hooks</a></li>
                          <li><a class="dropdown-item">Forms</a></li>
                          <li><a class="dropdown-item">Routing</a></li>
                          <li><a class="dropdown-item">Context</a></li>
                          <li><a class="dropdown-item">Redux</a></li>
                          <li><a class="dropdown-item">API Integration</a></li>
                          <li><a class="dropdown-item">Styling</a></li>
                          <li><a class="dropdown-item">Testing</a></li>
                          <li><a class="dropdown-item">Performance Optimization</a></li>
                          <li><a class="dropdown-item">Server Side Rendering</a></li>
                          <li><a class="dropdown-item">Static Site Generation</a></li>
                          

                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a style={{ color: "white" }} class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Python</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a class="dropdown-item">Action</a></li>
                          <li><a class="dropdown-item">Another action</a></li>
                          <li><a class="dropdown-item">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a style={{ color: "white" }}  class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Node JS</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a class="dropdown-item">Action</a></li>
                          <li><a class="dropdown-item">Another action</a></li>
                          <li><a class="dropdown-item">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item" >
                        <Link to='/video_page'  style={{ color: "white", cursor: 'pointer' }} className="nav-link">Video Lectures</Link>
                      </li>
                      <li className="nav-item" >
                        <Link to="/quiz_page"  style={{ color: "white", cursor: 'pointer' }} className="nav-link">Start Quiz</Link>
                      </li>
                      <li className="nav-item" >
                        <button  onClick={logoutHandler} style={{color:"white"}}  className="nav-link btn btn-primary">Log Out</button>
                      </li>
                    </>
                  )}


                  

                </ul>
              </div>
            </div>
          </nav>
        </div>


      </nav>
    </>
  );
};

export default Header;
