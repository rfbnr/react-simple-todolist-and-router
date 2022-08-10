import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../pages/About/About";
import AboutTeam from '../pages/About/AboutTeam/AboutTeam';
import Blog from '../pages/Blog/Blog';
import BlogDetail from '../pages/Blog/BlogDetail/BlogDetail';
import Dashboard from '../pages/Login/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import TodolistPage from "../pages/TodolistPage/TodolistPage";

function Home() {
    return (
        
        <BrowserRouter>
            <div>
                <li><Link to="/">TodoList</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="blog">Blog</Link></li>
                <li><Link to="login">Login</Link></li>
            </div>
            <Routes>
                <Route path="/" element={<TodolistPage />} />
                <Route path="about" element={<About />}>
                    <Route path="team" element={<AboutTeam/>}/>
                </Route>
                <Route path="blog" element={<Blog/>}/>
                <Route path="blog/:article" element={<BlogDetail />} />
                <Route path="login" element={<Login/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export default Home;
