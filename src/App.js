import React from "react"
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Sidebar />
      <Dashboard />
      <Sidebar />    
    </div>
  );
}

export default App;

const Div = styled.div `
position: relative;
`;
