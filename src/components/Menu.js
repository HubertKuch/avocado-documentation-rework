import React from "react";

export default function Menu() {
    return (<nav>
            <ul>
                <li>
                    <a href="/docs/global/get-started">🛫 Get started</a>
                </li>
                <li>
                    <a href="/docs/global/rest-controllers">🎮 Rest controllers</a>
                </li>
                <li>
                    <a href="/docs/global/sending-requests-from-frontend">✉ Sending requests from frontend</a>
                </li>
                <li>
                    <a href="/docs/global/http-consumers">♟ Http consumers</a>
                </li>
                <li>
                    <a href="/docs/global/middleware">🧩Middleware</a>
                </li>
            </ul>
        </nav>)
}