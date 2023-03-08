import Header from "../components/Header";
import Feature from "../components/Feature";
import React, {useState} from "react";
import CodeSnippet from "../components/CodeSnippet";
import Footer from "../components/Footer";
import MultiCodeSnippet from "../components/MultiCodeSnippet";

function Main() {
    const [activeSnippetTitle, setActiveSnippetTitle] = useState("index.php");
    const descriptionsBySnippetTitle = [{
        title: "index.php", description: [<h2>Fast development time</h2>, <span>
                        Faster development time by many features provided by Avocado like data source drivers, dependency injection, rest controllers, leafs and more.
                        You can create your own application easy way, without frustrating about old PHP methods.
                    </span>, <br/>, <br/>, <span>
                        You can easily declare REST controllers with only annotation, without creating any instances, writing logic to use it. You only declare a controller class,
                        annotate it and it's all, voilà.
                    </span>]
    }, {
        title: "RestController.php",
        description: [<h2>Easy Rest Controllers</h2>,
            <span>With Avocado you can declare many your own rest controller in classes.</span>, <br/>, <br/>,
            <span>Every controller can have many mapping, base url, own dependencies and what you like. Available methods are GET, POST, PUT, PATCH and DELETE.</span>,
            <br/>, <br/>,
            <span>Many param attributes helps you to do tasks like file uploads, getting request params, queries,
                    request body parsed to a specific class and store data from middleware.
                </span>]
    }, {
        title: "Resource.php", description: [<h2>Leafs, configurations, resources</h2>, <span>
                    Avocado supports dependency injection by own engine. You can declare
                    <ul>
                        <li>leafs (data returned by methods annotated with Leaf annotation),</li>
                        <li>configurations (classed annotated with Configuration annotation)</li>
                        <li>resources (classes annotated with Resource annotation)</li>
                    </ul>
                    which are stored in DI container and easily injected into Autowired fields.
                </span>]
    }, {
        title: "DataSource.php", description: [<h2>Data sources</h2>, <span>
                    To use database you can use DataSource class and declare your own source using Leaf annotation.
                </span>, <br/>, <br/>, <span>
                    In this example data will be get from <span className={"regular-green"}>application</span> file and used in dataSource method.
                </span>, <br/>, <br/>, <span>
                    To change data base type for example to Postgres you only need to change driver class to PostgreSQLDriver from <span
            className={"regular-blue"}>hubert/avocado-postgres-driver</span>.
                </span>]
    }];

    return (<div className="App">
        <Header/>
        <main className={"project-section"}>
            <div>
                <h1>
                    Progressive PHP framework
                </h1>
                <h4>
                    for building scalable web apps in PHP, based on drivers and classes
                </h4>
                <div>
                    <button>
                        <a href="">
                            Why Avocado?
                        </a>
                    </button>
                    <button>
                        <a href="/docs/global/get-started">
                            Get Started
                        </a>
                    </button>
                </div>
            </div>
        </main>
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
                <div className={"snippet-description"}>
                    {descriptionsBySnippetTitle.find(snippet => snippet.title === activeSnippetTitle).description}
                </div>
                <MultiCodeSnippet snippets={[<CodeSnippet title={"index.php"}>
                    {`#[Avocado]
#[RestController]
class DemoApplication {

    public static function run(): void {
        Application::run(__DIR__);
    }

    #[GetMapping("/")]
    public function hello(): array {
        return ["Hello world"];
    }
}`}
                </CodeSnippet>, <CodeSnippet title={"RestController.php"}>{`#[RestController]
class RestController {
    #[Autowired]
    private readonly UserServer $userService;
    
    #[GetMapping("/users/:id/")]
    public function getUserCredentialsById(#[RequestParam(name: "id")] string $id): array {
        return $this->userService($id);
    }
   
}`}</CodeSnippet>, <CodeSnippet language={"php"} title={"Resource.php"}>
                    {`#[Resource]
class Logger {
    public function info(string $data): void {
        // ...
    }    
    
    public function warn(string $data): void {
        // ....
    }
}`}
                </CodeSnippet>, <CodeSnippet title={"DataSource.php"}>
                    {`#[Configuration]
#[ConfigurationProperties(prefix: "data-source")]
class DataSourceRegister {
    private string $username;
    private string $password;
    private string $server;
    private string $dbname;
    private int $port;
    
    #[Leaf]
    public function dataSource(): DataSource {
        return (new DataSourceBuilder())
            -> username($this->username)
            -> password($this->password)
            -> server($this->server)
            -> port($this->port)
            -> databaseName($this->dbname)
            -> driver(MySQLDriver::class)
            -> build();
    }
}`}
                </CodeSnippet>]} onChangeAction={(snippet) => setActiveSnippetTitle(snippet.props.title)}/>
            </section>
        </section>
        <Footer/>
    </div>);
}

export default Main;
