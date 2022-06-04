import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from "./Home";

const Main = () => {
    const [active, setActive] = useState(false)
    return <div>
        <div className="App-container">
            <Sidebar active={active} />
            <Navbar setActive={setActive} active={active} />
        </div>
        <Home />
    </div>
};

export default Main;
