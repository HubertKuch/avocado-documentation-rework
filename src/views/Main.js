import Header from "../components/Header";

function Main() {
  return (
    <div className="App">
        <Header />
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
    </div>
  );
}

export default Main;
