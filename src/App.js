import React from "react";
import screens from "../src/screens";
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
} = screens;

const App = () => {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Experience />
      <Skills />
      <Project />
      <ContactForm />
      <Footer />
    </>
  );
};
export default App;
