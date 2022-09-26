import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home";
import Todos from "../../pages/todos/Todos";
import Albums from "../../pages/albums/Albums";
import Comments from "../../pages/comments/Comments";
import Posts from "../../pages/posts/Posts";
import css from './Navigation.module.css'

const Navigation = () => {
    return (
        <div>
            <hr/>
            <ul className={css.Navigation}>
                <li><Link to={"/"}>Home pages</Link></li>
                <li><Link to={"/todos"}>200 todos</Link></li>
                <li><Link to={"/albums"}>100 albums</Link></li>
                <li><Link to={"/comments"}>500 comments</Link></li>
            </ul>
            <hr/>
            <div>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='todos' element={<Todos/>}/>
                    <Route path='albums' element={<Albums/>}/>
                    <Route path='comments' element={<Comments/>}/>
                    <Route path='posts/:id/comments' element={<Posts/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Navigation;