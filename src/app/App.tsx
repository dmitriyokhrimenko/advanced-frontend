import { Suspense, useState, useContext } from 'react';
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage_async';
import { MainPageAsync } from '../pages/MainPage/MainPage_async';
import { ThemeContext, Theme } from './providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../helpers/classNames/classNames';


const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div  className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}></Route>
                    <Route path={'/'} element={<MainPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;