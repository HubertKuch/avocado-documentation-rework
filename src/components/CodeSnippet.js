import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import {atomOneDark as theme} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeSnippet({ title, children, language = "php" }) {
    return (
        <div className={"code-snippet"}>
            <div className={"title"}>
                {title}
            </div>
            <SyntaxHighlighter language={language} style={theme}>
                {children}
            </SyntaxHighlighter>
        </div>
    )
}
