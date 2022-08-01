import React from "react";
import SideBar from "./component/Bar/sideBar";
import TopBar from "./component/Bar/topBar";
import "./assets/css/style.css";
import Index from "./component/dashApp/Index";
function App() {
  return (
    <>
      <div className="app">
        <SideBar />
        <TopBar />
        <main>
          <Index />
        </main>
      </div>
    </>
  );
}

export default App;
