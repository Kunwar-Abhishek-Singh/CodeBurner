import React from 'react'
import Header from '../Header/Header';
import './Study.css';
import { useParams } from 'react-router-dom';
import { studyData } from '../../Dummy_Database';
import { cookie_validation_context } from '../Context_Component/Context';
import { useContext } from 'react';
import Login from '../Login_Signup/Login';
const Study = () => {
  const { subject } = useParams();
  const data = useContext(cookie_validation_context);


  return (
    <>
    {data[0]?
    <div>
      <div>
        <Header />
      </div>
      <div className='embed_data_tag' >
        {studyData.filter(data => data.heading === subject).map((studylink) => (
          <iframe
            title="W3Schools React Tutorial"
            // src="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
            // src="https://www.placementpreparation.io/mcq/react/"
            src={studylink.submenu[0].website_link}
            width="100%"
            height="550px"
            frameBorder="0"
          />
        ))}

      </div>
    </div>
    :<Login />}
    </>
  )
}

export default Study;

