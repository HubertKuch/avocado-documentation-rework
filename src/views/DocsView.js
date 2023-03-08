import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hljs from "highlight.js";
import Markdown from 'markdown-it';
import Menu from "../components/Menu";

export default function DocsView() {
    const {folder, file} = useParams();
    const [data, setData] = useState("");
    const [onThisPageState, setOnThisPageState] = useState([]);
    const mainRef = useRef(null);
    const converter = new Markdown({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    const parsed = hljs.highlight(str, {language: lang}).value;

                    return `<div class="code-snippet"><pre><code>${parsed}</code></pre></div>`;
                } catch (__) {
                }
            }

            return '<pre class="hljs"><code>' + converter.utils.escapeHtml(str) + '</code></pre>';
        }
    });

    const observer = new MutationObserver((mutations, observer) => {
        const headings = mutations[0].target.querySelectorAll("h1, h2, h3, h4, h5, h6")
        const getHeadingId = (heading) => {
            return heading.textContent.trim().replace(" ", "-").toLowerCase();
        };

        headings.forEach(heading => {
            const content = heading.textContent.trim();
            const newId = getHeadingId(heading);

            heading.setAttribute("id", newId);
            heading.innerHTML = `<a class="heading-anchor" href="#${newId}">#</a> ${content}`;
            setOnThisPageState((prev) => [...prev, <a href={"#" + newId}>{content}</a>]);
        });
    });

    useEffect(() => {
        if (mainRef !== null) {
            observer.observe(mainRef.current, {subtree: true, attributes: true, characterData: true, childList: true});
        }
    }, [mainRef, observer]);


    useEffect(() => {
        fetch(`/docsraw/${folder}/${file}.md`).then((res) => res.text()).then(setData)
    }, [data, file, folder]);

    return (<div className={"App docs-view"}>
        <Header/>
        <section>
            <Menu/>
            <main ref={mainRef} className={"docs__main"}
                  dangerouslySetInnerHTML={{__html: converter.render(data)}}/>
        </section>
        <Footer/>
        <div className={"on-this-page"}>
            <div className={"on-this-page-title"}>On this page</div>
            {onThisPageState}
        </div>
    </div>);
}