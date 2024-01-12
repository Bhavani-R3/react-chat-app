import React from "react";
import ChatCont from "../chat/ChatCont";
import "./home.scss"

function Home(props) {
    return(
        <div className="app-body">
            <ChatCont/>
        </div>
    )
}

export default Home