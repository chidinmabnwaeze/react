import React from "react";
import ReactDOM from "react-dom";

const newPage =(
    <div>
       <h1>This is my practice heading</h1>
       <ul>

        <li>
            <a href="">Home</a>
        
        </li>

        <li className="nav-list">
            <a className ="nav-link" href="">About</a>
        </li>
       </ul>
    </div>
)

ReactDOM.render(newPage, document.getElementById("root"))