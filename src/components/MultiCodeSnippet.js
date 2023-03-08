import React, {useState} from "react";
import CodeSnippet from "./CodeSnippet";

export default function MultiCodeSnippet({snippets, onChangeAction}) {
    const [currentSnippet, setCurrentSnippet] = useState(snippets[0]);

    return (<div className={"code-snippet multi-code-snippet"}>
        <div className="title">
            {snippets.map((snippet) => <span
                onClick={() => {
                    setCurrentSnippet(snippet);
                    onChangeAction(snippet);
                }}
                className={`muli-code-snippet__title ${snippet.props.title === currentSnippet.props.title ? 'active' : ''}`}
                key={snippet.props.title}>{snippet.props.title}</span>)}
        </div>
        <div>
            <CodeSnippet>
                {currentSnippet.props.children}
            </CodeSnippet>
        </div>
    </div>);
}