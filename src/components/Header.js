import React from "react";
import AvocadoLogo from "../images/logo.svg";
import GitHubIcon from "./icons/GitHubIcon";

export default function Header() {
    return (<>
        <header className={"main-header"}>
            <div className={"logo-container"}>
                <img className={"logo inline"} src={AvocadoLogo} alt={"Avocado, logo"}/>
                <span className={"framework-name"}><span className={"regular-green"}>A</span>vocado</span>
            </div>
            <div className={"main-header__icons"}>
                    <GitHubIcon />
            </div>
        </header>
    </>);
}
