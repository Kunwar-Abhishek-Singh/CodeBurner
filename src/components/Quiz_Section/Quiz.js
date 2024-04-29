import React from 'react'
import Header from '../Header/Header'
import Login from '../Login_Signup/Login'
import { useParams } from 'react-router-dom';
import { cookie_validation_context } from '../Context_Component/Context';
import { useContext } from 'react';
import './Quiz.css';

const Quiz = () => {
    const { topic } = useParams();
  const data = useContext(cookie_validation_context);
  return (
    <>
    {data[0]?
    <div>
      <div>
        <Header />
      </div>
      <div className='embed_data_tag' >
          <iframe
            title="W3Schools React Tutorial"
            // src="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
            // src="https://www.placementpreparation.io/mcq/react/"
            src={`https://www.placementpreparation.io/mcq/${topic.toLowerCase()}/`}
            width="100%"
            height="550px"
            frameBorder="0"
          />
        

      </div>
    </div>
    :<Login />}
    </>
  )
}

export default Quiz
