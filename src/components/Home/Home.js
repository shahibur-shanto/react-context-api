import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from './Categories/Categories';

const Home = () => {
    const [category] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is Home page count: {category}</h1>
            <Categories/>
        </div>
    );
};

export default Home;