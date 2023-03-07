import Header from "../components/Header";
import Feature from "../components/Feature";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import {atomOneDark as theme} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Main() {
    return (<div className="App">
        <Header/>
        <section className={"project-section"}>
            <div>
                <h1>
                    Progressive PHP framework
                </h1>
                <h4>
                    for building scalable web apps in PHP, based on drivers and classes
                </h4>
            </div>
        </section>
        <section className={"features-section"}>
            <section className={"features"}>
                <Feature title={"Testable"} description={"Support for TDD, easy e2e tests."}/>
                <Feature title={"Data sources"}
                         description={"Switching between databases types and environment by changing one variable."}/>
                <Feature title={"ORM"} description={"Your database in simple, defined by yourself classes."}/>
                <Feature title={"Configurable"}
                         description={"Easy configurable in application dot JSON or YAML file."}/>
            </section>
            <section className={"framework-shorthand"}>
                <div className={"fast-development-time"}>
                    <h2>Fast development time</h2>
                    <span>
                        Faster development time by many features provided by Avocado like data source drivers, dependency injection, rest controllers, leafs and more.
                        <br/><br/>
                        You can create your own application easy way, without frustrating about old PHP methods.
                    </span>
                </div>
                <div>
                    <SyntaxHighlighter language={"php"} style={theme}>
                        {`
#[Avocado]
#[RestController]
class DemoApplication {

    public static function run(): void {    
        Application::init(__DIR__);
    }
 
    #[GetMapping("/")]
    public function hello(): string {
        return "Hello world";
    }   
}                    
                        `}
                    </SyntaxHighlighter>
                </div>
            </section>
        </section>
    </div>);
}

export default Main;
