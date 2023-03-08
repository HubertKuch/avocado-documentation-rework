import React from "react";
import AvocadoLogo from "../images/logo.svg";
import SearchBar from "./SearchBar";
import GitHubIcon from "./icons/GitHubIcon";

export default function Header() {
    return (<>
        <header className={"main-header"}>
            <div className={"logo-container"}>
                <img className={"logo inline"} src={AvocadoLogo} alt={"Avocado, logo"}/>
                <span className={"framework-name"}><span className={"regular-green"}>A</span>vocado</span>
                <SearchBar/>
            </div>
            <div className={"main-header__icons"}>
                <a target={"_blank"} href="https://github.com/HubertKuch/Avocado.git" rel="noreferrer">
                    <GitHubIcon/>
                </a>
            </div>
        </header>
    </>);
}
