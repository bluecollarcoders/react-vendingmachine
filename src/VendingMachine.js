import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

function VendingMachine() {
    return(
        <div
        className="VendingMachine" 
        style={{backgroundImage: `url(${vendingMachineImg})` }}>
        <Message>
        <h1>Hey I'm a vending machine. How can I help you</h1>
        </Message>
        <Message>
            <h1><Link to="/soda">soda</Link></h1>
            <h1><Link to="/chips">chips</Link></h1>
            <h1><Link to="/sardines">fresh sardines</Link></h1>
        </Message>
        </div>
    );
}

export default VendingMachine;