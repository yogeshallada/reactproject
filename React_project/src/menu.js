import React from "react"
import './YourComponent.css';

import { Link } from "react-router-dom"
function Menu(){
    return(
        <div>
        <Link to="/">
            <button className="animated-heading">Home</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/History">
            <button className="animated-heading"> History</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/MainCharacters">
            <button className="animated-heading">Powerful Characters</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Movieslist">
            <button className="animated-heading">Upcoming Marvel Projects</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Medias">
            <button className="animated-heading">Videos</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Contact">
            <button className="animated-heading">Contact</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
    </div>
    )
}
export default Menu