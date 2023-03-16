import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Chat from "@/components/chat";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
