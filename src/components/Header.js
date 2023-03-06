import React from "react";
import AvocadoLogo from "../images/logo.svg";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <header className={"main-header"}>
            <img className={"logo inline"} src={AvocadoLogo}  alt={"Avocado, logo"}/>
            <span className={"framework-name"}><span className={"regular-green"}>A</span>vocado</span>
            <SearchBar />
        </header>
    );
}
