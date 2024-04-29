import React from 'react'
import Header from '../Header/Header';
import './Video.css';
import { useParams } from 'react-router-dom';
import { studyData } from '../../Dummy_Database';
import { cookie_validation_context } from '../Context_Component/Context';
import { useContext } from 'react';
import Login from '../Login_Signup/Login';
const Video = () => {
    const { subject } = useParams();
    const data = useContext(cookie_validation_context);

    return (
        <>
            {data[0] ?
                <div>
                    <div>
                        <Header />
                    </div>
                    <div className='embed_data_tag' >
                        {studyData.filter(data => data.heading === subject).map((studylink) => (
                            <iframe
                                width="100%"
                                height="550px"
                                src={studylink.submenu[0].youtube_playlist}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            />
                            
                        ))}

                    </div>
                </div>
                : <Login />}
        </>
    )
}

export default Video;

