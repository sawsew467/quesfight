import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Learn from './pages/Learn';
import './style.scss';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/learn" element={<Learn></Learn>}></Route>
            </Routes>
        </>
    );
}

export default App;
