import React from "react";
import GitHubIcon from "./icons/GitHubIcon";

export default function Footer() {
    return (
        <footer>
            <section className={"contact"}>
                <div>
                    <a href="tel:+48 730 071 565">
                        +48 730 071 565
                    </a>
                </div>
                <div>
                    <a href="mailto:kuchhubert@gmail.com">kuchhubert@gmail.com</a>
                </div>
            </section>
            <section className={"repository"}>
                <div>
                    <a href="https://github.com/HubertKuch/Avocado.git" target={"_blank"} rel="noreferrer">
                        Repository
                    </a>
                </div>
                <div>
                    <a href="https://github.com/HubertKuch/avocado-mysql-driver.git" target={"_blank"} rel="noreferrer">
                        MySQL driver
                    </a>
                </div>
                <div>
                    <a href="https://github.com/HubertKuch/avocado-postgresql-driver.git" target={"_blank"} rel="noreferrer">
                        PostgresSQL Driver
                    </a>
                </div>
            </section>
            <section className={"github"}>
                <div>
                    <a href="https://hubertkuch.pl" target={"_blank"} rel="noreferrer">
                        My portfolio
                    </a>
                </div>
                <div>
                    <a href="https://github.com/HubertKuch" target={"_blank"} rel="noreferrer">
                        My GitHub
                    </a>
                </div>
            </section>
            <section className={"author"}>
                <span>
                    Hubert Kuch &copy; 2023
                </span>
            </section>
        </footer>
    );
}