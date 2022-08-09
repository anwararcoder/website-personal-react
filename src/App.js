import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/style.css'


import Index from './pages/Home/index';
import ContactPage from "./pages/Contact/contact-page";

class App extends Component {
    state = {

    }
    render() {
        return (
            <BrowserRouter>
            <Routes>
              <Route>
                <Route index element={<Index />} />
                <Route path="/contact-page" element={<ContactPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        );
    }
}

export default App;