import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hljs from "highlight.js";
import Markdown from 'markdown-it';

export default function DocsView() {
    const { folder, file } = useParams();
    const [data, setData] = useState("");
    const converter = new Markdown({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    const parsed = hljs.highlight(str, {language: lang}).value;

                    return `<div class="code-snippet"><pre><code>${parsed}</code></pre></div>`;
                } catch (__) {}
            }

            return '<pre class="hljs"><code>' + converter.utils.escapeHtml(str) + '</code></pre>';
        }
    });

    useEffect(() => {
        fetch(`/docsraw/${folder}/${file}.md`).then((res) => res.text()).then(setData)
    }, [data, file, folder]);

    return (
        <div className={"App docs-view"}>
            <Header />
            <main dangerouslySetInnerHTML={{ __html: converter.render(data) }} />
            <Footer />
        </div>
    );
}