import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header/Header"

const App = () => {
    return(
        <>
         <Header/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);