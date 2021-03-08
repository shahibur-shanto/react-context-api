
import React, { useContext} from 'react';
import { CategoryContext } from '../../App';
const Header = () => {
    const [category,setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>Total Shipment Count: {category}</h1>
            <button onClick={()=>setCategory(category+1)}>Increment</button>
        </div>
    );
};

export default Header;