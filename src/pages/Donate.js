import React from "react";
import { useNavigate } from "react-router-dom";
import "./Donate.css"; 

const Donate = () => {
    const navigate = useNavigate();

    return (
        <button className="donate-button" onClick={() => navigate("/donate")}>
            Donate Today
        </button>
    );
};

export default Donate;
