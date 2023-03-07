import React from "react";

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
                    <a href="">
                        Repository
                    </a>
                </div>
                <div>
                    <a href="">
                        MySQL driver
                    </a>
                </div>
                <div>
                    <a href="">
                        PostgresSQL Driver
                    </a>
                </div>
            </section>
            <section className={"github"}>
                <div>
                    <a href="">
                        My portfolio
                    </a>
                </div>
                <div>
                    <a href="">
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