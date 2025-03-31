import React from "react";
import Navbar from "../../components/Navbar";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Packages from "../Packages";
import SubscriptionForm from "../SubscriptionForm";
import ContactUS from "../ContactUS";
const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <AboutUs />
      <Packages />
      <SubscriptionForm />
      <ContactUS />
    </div>
  );
};

export default App;
