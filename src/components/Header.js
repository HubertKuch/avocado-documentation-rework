import React from "react";
import AvocadoLogo from "../images/logo.svg";
import GitHubIcon from "./icons/GitHubIcon";

export default function Header() {
    return (<>
        <header className={"main-header"}>
            <div className={"logo-container"}>
                <img className={"logo inline"} src={AvocadoLogo} alt={"Avocado, logo"}/>
                    <span className={"framework-name"}>
                        <a style={{color: "white"}} href="/"><span className={"regular-green"}>A</span>vocado</a>
                    </span>
            </div>
            <div className={"main-header__icons"}>
                    <GitHubIcon />
            </div>
        </header>
        {/*<section className={"header-nav"}>*/}
        {/*    <div>Menu</div>*/}
        {/*    <div>Go to top</div>*/}
        {/*</section>*/}
    </>);
}
