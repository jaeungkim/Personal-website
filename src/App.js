import React from "react";
import screens from "../src/screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";

const {
  Header,
  Footer,
  Profile,
  About,
  Skills,
  Experience,
  Project,
  ContactForm,
  Blog,
} = screens;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Profile />
              <About />
              <Skills />
              <Experience />
              <Project />
              <ContactForm />
              <Footer />
            </>
          }
        ></Route>
        <Route path="blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};
export default App;
