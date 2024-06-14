import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './auth/LoginComponent';
import SignupComponent from './auth/SignupComponent';
import EmailActivationComponent from './auth/EmailActivationComponent';
import Home from './pages/Home';
import AddProductForm from './auth/ProfileComponent';
import SubjectBot from './pages/Subject/Subject';
import Navbar from './pages/Navbar';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage ';
import User2SignupComponent from './auth/User2SignupComponent';
import LandingPage from './pages/inedexpage';
import FAQPage from './pages/Faq';
import Chatbot from './Bot/Ai_chat_bot';
import Dash from './dsah/dash';
import Work from './HomeWork/Homework';
import MathsQuiz from './pages/quiz/Maths_Quiz';
import IndiaQuiz from './pages/quiz/India_Quiz';
import SportsQuiz from './pages/quiz/Sports_Quiz';
import GKQuiz from './pages/quiz/Gk_Quiz';
import Quiz_main from './pages/quiz/main/Quiz_main';
import Notes from './pages/Notes/Notes';
import Main_Notes from './pages/Notes/Main_Notes';
import Flashcard from './pages/Flash/Flash_card';
import PostComponent from './pages/Social/Comunity';
import Flashmain from './pages/Flash/flash_main';
const App = () => {
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

 

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {isBotOpen && (
          <div className="bot-container">
            {/* Render your chatbot component here */}
          </div>
        )}

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/activate" element={<EmailActivationComponent />} />
          <Route path="/profile" element={<AddProductForm />} />
    
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/usersinup" element={<User2SignupComponent />} />
          <Route path='/faq' element={<FAQPage/>} />
          <Route path='/aiachatbot'  element={<Chatbot />} />
          <Route path='/dash'  element={<Dash/>} />
          <Route path='/bot'  element={<SubjectBot />} />
          <Route path='/work'  element={<Work />} />
          <Route path='/maths-quiz' element={<MathsQuiz />} />
          <Route path='/india-quiz' element={<IndiaQuiz/>} />
          <Route path='/sports-quiz'  element={<SportsQuiz/>} />
          <Route path='/gk-quiz'  element={<GKQuiz/>} />
          <Route path='/quiz' element={<Quiz_main/>} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/main-notes' element={<Main_Notes />} />
          <Route path='/flashcard' element={<Flashcard />} />
          <Route path='/comunity' element={<PostComponent />} />
          <Route path='/flashmain' element={<Flashmain />} />
         

     
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
