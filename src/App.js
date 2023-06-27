import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Routes/Home'
import AddStudent from './Routes/AddStudent'
import EditStudent from './Routes/EditStudent'
import Student from './Routes/Student'
import NotFound from './Routes/NotFound'


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="student">
                <Route index element={<Student />} />
                <Route path=":id" element={<EditStudent />} />
            </Route> 
            <Route path="add" element={<AddStudent />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
    );
};

export default App;
