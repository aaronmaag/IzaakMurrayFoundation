import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css"; 

const Contact = () => {
    const navigate = useNavigate();

    return (
        <button className="contact-button" onClick={() => navigate("/contact")}>
            Contact Us
        </button>
    );
};

export default Contact;
