import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Pages/First_page/First_page';
import SecondPage from './Pages/Second_page/Second_page';
import ThirdPage from './Pages/Third_page/Third_page';
import RegistrationOtppage from './Pages/OTP  Page/RegistrationOtppage';
import SignupPage from './Pages/Fourth_page/Signup_page';
import LoginPage from './Pages/Login_Page/LoginPage';
import { Context } from './components/Context_Component/Context';
import ForgotPasswordOtpPage from './Pages/OTP  Page/ForgotPasswordOtpPage';
import Update_Password from './Pages/Update_Password';
import Study from './components/Study_Section/Study';
import Quiz from './components/Quiz_Section/Quiz';
import Video from './components/Video_Section/Video';

function App() {
  return (
    <Context>
      <BrowserRouter scrollRestoration="manual">
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path=':exam_selection' element={<SecondPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route exact path='/signup/:email' element={<RegistrationOtppage />} />
          <Route exact path='/forgot_password/otp_verification/:email' element={<ForgotPasswordOtpPage />} />
          <Route exact path='/forgot_password/:email/password_update' element={<Update_Password />} />
          <Route path='/profile/:topper_name' element={<ThirdPage />} />
          <Route path='/study/:subject' element={<Study />} />
          <Route path='/quiz_page' element={<SecondPage />} />
          <Route path='/video_page' element={<ThirdPage />} />
          <Route path='/quiz/:topic' element={<Quiz />} />
          <Route path='/video_lectures/:subject' element={<Video />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
